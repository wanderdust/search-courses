const { getUdacityCourses } = require("../apis/udacityCourses");
const { getKhanAcademyCourses } = require("../apis/khanAcademyCourses");
const { FilterByText } = require("../selectors/filterByText");
const { database } = require("../firebase/firebase");

const courseUpdater = () => {
    console.log("Updating database data...");

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
        console.log("Finished updating database data.");
    })
    .catch((e) => {
        console.log("Error updating the database", e);
    });
};

module.exports = {
    courseUpdater
};