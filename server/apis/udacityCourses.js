const axios = require("axios");

const getUdacityCourses = (testUrl, urlEntry) => {
    const url = testUrl || `https://www.udacity.com/public-api/v1/catalog`;

    return axios.get(url, {
        timeout: 500000
        })
        .then(async (res) => {
            let courses = [];
            countryCode = await axios.get("https://geode.udacity.com/")
                .then(({data}) => data.countryCode)
                .catch((e) => e);
            
            countryCurrency = await axios.get("http://country.io/currency.json")
                .then(({data}) => data[countryCode])
            
            for (course of res.data[urlEntry]) {
                // Returns null so we can discard it later with filter.
                if (course.title === "" || course.short_summary === "" || !course.available) {
                    continue;
                }
                let coursePrice = {showPrice: "Free", intPrice: 0};
                let certificate = false;

                // Identify if it is a udacitys nanodegree
                if (course.key.includes("nd")) {
                    let course_id = course.key;
                    let price_base_url = "https://braavos.udacity.com/api/prices";
                    let price_query_params = `?item=urn:x-udacity:item:node:${course_id}&price_sheet=regular&currency=${countryCurrency}`;
                    let price_url = price_base_url + price_query_params;
                    certificate = true;

                    coursePrice = await axios.get(price_url)
                        .then(({data}) => {
                            price = 0
                            if (data.results.length > 0) {
                                // FOrmating the price. It comes without decimal points.
                                intPrice = `${data.results[0].price.original_amount}`;
                                intPrice = intPrice.slice(0, (intPrice.length - 2));
   
                                price = {
                                    showPrice: data.results[0].price.original_amount_display,
                                    intPrice
                                }
                            }
                            return price
                        });
                }

                const capitalizeFirstLetter = (string) => {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }

                const parseMarkDown = (string) => {
                    return string.replace(/####|###|##|#/g, '\$& ');
                }

                const includesDuration = () => {
                    const expected_duration = !!course.expected_duration;
                    const expected_duration_unit = !!course.expected_duration_unit;
                    return expected_duration && expected_duration_unit;
                };
                const duration = includesDuration() ? `${course.expected_duration} ${course.expected_duration_unit}` : "";

                
                my_course = {
                    available: course.available,
                    title: course.title,
                    shortSummary: course.short_summary != undefined ? course.short_summary : "",
                    fullDescription: course.summary.replace(/^#*#/, '$1 $2'),
                    price:  coursePrice.intPrice,
                    showPrice: coursePrice.showPrice,
                    duration,
                    urlToCourse: "https://www.udacity.com/course/" + course.slug,
                    platform: "Udacity",
                    image: course.image,
                    logo: "udacity-logo.png",
                    syllabus: parseMarkDown(course.syllabus),
                    level: course.level,
                    difficulty: course.level,
                    aboutPlatform: 
                        `Our mission is to democratize education through the
                        offering of world-classhigher education opportunities that are accessible,
                        flexible, and economical. Virtually anyone on the planet with an internet
                        connection and a commitment to self-empowerment through learning can come to Udacity,
                        master a suite of job-ready skills, and pursue rewarding employment.`,
                    certificate: certificate,
                    tags: course.tags
                }
                courses.push(my_course)
                
            }

            return courses;
        })
        .catch((e) => {
            console.log("Unable to fetch udacity data");
            return [];
        });
};

module.exports = {
    getUdacityCourses
};