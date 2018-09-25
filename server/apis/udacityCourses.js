const axios = require("axios");

const getUdacityCourses = (testUrl) => {
    const url = testUrl || "https://www.udacity.com/public-api/v0/courses";
    
    return axios.get(url, {
        timeout: 500000
        })
        .then((res) => {
            return res.data.courses.map((course) => {
                if (course.title === "" || course.short_summary === "") {
                    return null;
                }

                const capitalizeFirstLetter = (string) => {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }

                const parseMarkDown = (string) => {
                    return string.replace(/###/g, '\$& ');
                }

                const includesDuration = () => {
                    const expected_duration = !!course.expected_duration;
                    const expected_duration_unit = !!course.expected_duration_unit;
                    return expected_duration && expected_duration_unit;
                };
                const duration = includesDuration() ? `${course.expected_duration} ${course.expected_duration_unit}` : "";

                return {
                    title: course.title,
                    shortSummary: course.short_summary,
                    fullDescription: course.summary.replace(/^#*#/, '$1 $2'),
                    price: 0,
                    duration,
                    urlToCourse: course.homepage,
                    platform: "Udacity",
                    image: course.image,
                    logo: "udacity-logo.png",
                    syllabus: parseMarkDown(course.syllabus),
                    level: course.level,
                    platform: "Udacity",
                    difficulty: capitalizeFirstLetter(course.level),
                    aboutPlatform: 
                        `Our mission is to democratize education through the
                        offering of world-classhigher education opportunities that are accessible,
                        flexible, and economical. Virtually anyone on the planet with an internet
                        connection and a commitment to self-empowerment through learning can come to Udacity,
                        master a suite of job-ready skills, and pursue rewarding employment.`,
                    certificate: false
                }
            }).filter((course) => course);
        })
        .catch((e) => {
            console.log("Unable to fetch udacity data");
            return [];
        });
};

module.exports = {
    getUdacityCourses
};