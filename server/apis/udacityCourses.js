const axios = require("axios");

const getUdacityCourses = () => {
    const url = "https://www.udacity.com/public-api/v0/courses";

    return axios.get(url)
        .then((res) => {
            return res.data.courses.map((course) => ({
                title: course.title,
                expected_learning: "",
                image: "",
                summary: "",
                price: "",
                duration: "" 
            }))
        })
        .catch((e) => {
            console.log(e)
        });
}

module.exports = {
    getUdacityCourses
};