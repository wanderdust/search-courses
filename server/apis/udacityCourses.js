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

                const includesDuration = () => {
                    const expected_duration = !!course.expected_duration;
                    const expected_duration_unit = !!course.expected_duration_unit;
                    return expected_duration && expected_duration_unit;
                };
                const duration = includesDuration() ? `${course.expected_duration} ${course.expected_duration_unit}` : "";

                return {
                    title: course.title,
                    description: course.short_summary,
                    price: 0,
                    duration,
                    urlToCourse: course.homepage,
                    platform: "Udacity",
                    image: course.image,
                    logo: "udacity-logo.png"
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