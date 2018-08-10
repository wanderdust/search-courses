const { getUdacityCourses } = require("../apis/udacityCourses");
const { getKhanAcademyCourses } = require("../apis/khanAcademyCourses");
const { FilterByText } = require("../selectors/filterByText");
const { database } = require("../firebase/firebase");

const getVisibleCourses = (text) => {
    
    return database.ref("courses/").once("value")
        .then((snapshot) => {
            const courses = [];

            snapshot.forEach((childSnapshot) => {
                courses.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key
                })
            });
            return courses;
        })
        .then((courses) => {
            const filterByText = new FilterByText(courses, text);
            const visibleCourses = filterByText.visibleCourses;

            return visibleCourses;
        })
        .catch((e) => {
            console.log(e);
        });
};

module.exports = {
    getVisibleCourses
};