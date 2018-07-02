const { courseUpdater, getApiData } = require("../../updater/courseUpdater");
const { database } = require("../../firebase/firebase");
const { courses } = require("../fixtures/courses");

let testCourses, expectedResult;

beforeEach(() => {
    database.ref('courses/').set(null);

    testCourses = courses.map(({title, description, price, duration, urlToCourse, platform}) => {
        return {title, description, price, duration, urlToCourse, platform}
    });

    expectedResult = testCourses.map((course) => {
        return {...course, id: expect.anything()}
    })
});

test("should update the database with the data from the apis", async (done) => {
    await courseUpdater(testCourses);
    await database.ref(`courses`).once("value").then((snapshot) => {
        const courseData = [];

        snapshot.forEach((childSnapshot) => {
            courseData.push({
                ...childSnapshot.val(),
                id: childSnapshot.key
            })
        });
        return courseData;
    }).then((courses) => {
        expect(courses).toEqual(expectedResult);
        done();
    });
}, 20000)