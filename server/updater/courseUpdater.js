const { getUdacityCourses } = require("../apis/udacityCourses");
const { getKhanAcademyCourses } = require("../apis/khanAcademyCourses");
const { FilterByText } = require("../selectors/filterByText");
const { database } = require("../firebase/firebase");

const getApiData = () => {
    return Promise.all([
        getUdacityCourses(),
        getKhanAcademyCourses()
    ])
    .then((courses) => {
        return [].concat(...courses);
    })
    .catch((e) => {
        console.log("Error fetching the data from the apis:", e);
    });
}

const courseUpdater = (courses) => {
    console.log("Updating database data...");

    database.ref('courses/').set(null);
    courses.forEach((course) => {
        database.ref(`courses/`).push(course).catch((e) => {
            console.log(e)
        });
    });
    console.log("Database updated.");
};

module.exports = {
    courseUpdater,
    getApiData
};