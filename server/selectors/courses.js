const { getUdacityCourses } = require("../apis/udacityCourses");
const { getKhanAcademyCourses } = require("../apis/khanAcademyCourses");
const { filterByText } = require("../selectors/filterByText");

const getVisibleCourses = (text) => {
    
    return Promise.all([
        getUdacityCourses(),
        getKhanAcademyCourses()
    ])
        .then((courses) => {
            const formattedCourses = [].concat(...courses);
            const visibleCourses = filterByText(formattedCourses, text);

            return visibleCourses;
        })
        .catch((e) => {
            console.log(e);
        })
};

module.exports = {
    getVisibleCourses
};