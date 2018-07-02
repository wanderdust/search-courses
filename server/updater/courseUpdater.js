const { getUdacityCourses } = require("../apis/udacityCourses");
const { getKhanAcademyCourses } = require("../apis/khanAcademyCourses");
const { FilterByText } = require("../selectors/filterByText");
const { database } = require("../firebase/firebase");

const courseUpdater = (text) => {
    
    return Promise.all([
        getUdacityCourses(),
        getKhanAcademyCourses()
    ])
    .then((courses) => {
        const formattedCourses = [].concat(...courses);

        database.ref('courses/').set(null);
        formattedCourses.forEach((course) => {
            database.ref(`courses/`).push(course).catch((e) => {
                console.log(e)
            });
        });
    })
    .catch((e) => {
        console.log("Error updating the database", e);
    });
};

module.exports = {
    courseUpdater
};