const { getUdacityCourses } = require("../apis/udacityCourses");
const { getKhanAcademyCourses } = require("../apis/khanAcademyCourses");
const { FilterByText } = require("../selectors/filterByText");

const getVisibleCourses = (text) => {
    
    return Promise.all([
        getUdacityCourses(),
        getKhanAcademyCourses()
    ])
    .then((courses) => {
        const formattedCourses = [].concat(...courses);
        const filterByText = new FilterByText(formattedCourses, text);
        const visibleCourses = filterByText.sortedByRelevance;

        return visibleCourses;
    })
    .catch((e) => {
        console.log(e);
    });
};

module.exports = {
    getVisibleCourses
};