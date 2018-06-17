const {getUdacityCourses} = require("../apis/udacityCourses.js");

const getVisibleCourses = () => {
    return Promise.all([getUdacityCourses()])
        .then((courses) => {
            // Do some filtering and return courses filtered.
            const formattedCourses = [].concat(...courses);
            return formattedCourses;
        })
        .catch((e) => {
            console.log(e);
        })
};

module.exports = {
    getVisibleCourses
};