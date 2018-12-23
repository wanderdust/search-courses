const axios = require("axios");

const getUdacityCourses = (testUrl) => {
    const url = testUrl || "https://www.udacity.com/public-api/v1/courses";
    
    return axios.get(url, {
        timeout: 500000
        })
        .then((res) => {
            return res.data.courses.map((course) =>  {
                // Returns null so we can discard it later with filter.
                if (course.title === "" || course.short_summary === "" || !course.available) {
                    return null;
                }

                if (course.key.includes("cx")) {
                    course_id = course.related_degree_keys[0]
                    price_url = `https://braavos.udacity.com/api/prices?item=urn:x-udacity:item:node:${course_id}&price_sheet=regular&currency=USD`
                    // course_price =  axios.get(price_url).then(({data}) => data.results[0].price.original_amount_display).catch((e) => console.log(e))
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

                
                return {
                    available: course.available,
                    title: course.title,
                    shortSummary: course.short_summary != undefined ? course.short_summary : "",
                    fullDescription: course.summary.replace(/^#*#/, '$1 $2'),
                    price: 0,
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
                    certificate: false,
                    tags: course.tags
                }
            }).filter((course) =>  course != null);
        })
        .catch((e) => {
            console.log("Unable to fetch udacity data");
            console.log(e)
            return [];
        });
};

module.exports = {
    getUdacityCourses
};