const {getUdacityCourses} = require("../apis/udacityCourses.js");

const getVisibleCourses = () => {
    return Promise.all([getUdacityCourses()])
        .then((courses) => {
            // Do some filtering and return courses filtered.
            return courses[0];
        })
        .catch((e) => {
            console.log(e)
        })
};

module.exports = {
    getVisibleCourses
};