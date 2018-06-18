const uid = require("uid");
const axios = require("axios");

const getUdacityCourses = (testUrl) => {
    const url = testUrl || "https://www.udacity.com/public-api/v0/courses";

    return axios.get(url)
        .then((res) => {
            return res.data.courses.map((course) => ({
                title: course.title,
                summary: "",
                price: "",
                duration: "",
                uid: uid()
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