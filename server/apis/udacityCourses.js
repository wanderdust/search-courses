const axios = require("axios");

const getUdacityCourses = (testUrl) => {
    const url = testUrl || "https://www.udacity.com/public-api/v0/courses";

    return axios.get(url, {
        timeout: 500000
        })
        .then((res) => {
            const includesDuration = () => {
                const expected_duration = !!course.expected_duration;
                const expected_duration_unit = !!course.expected_duration_unit;
                return expected_duration && expected_duration_unit;
            };
            const duration = includesDuration ? `${course.expected_duration} ${course.expected_duration_unit}` : "";

            return res.data.courses.map((course) => ({
                title: course.title,
                description: course.short_summary,
                price: 0,
                duration,
                urlToCourse: course.homepage,
                platform: "Udacity",
                logo: "udacity-logo.png"
            }));
        })
        .catch((e) => {
            console.log("Unable to fetch udacity data");
            return [];
        });
};

module.exports = {
    getUdacityCourses
};