const { getVisibleCourses } = require("../../selectors/courses");
const { database } = require("../../firebase/firebase");
const { courses } = require("../fixtures/courses");

beforeEach((done) => {
    const courseData = {};

    courses.forEach(({ id, title, fullDescription, price, duration, urlToCourse, platform }) => {
        courseData[id] = { title, fullDescription, price, duration, urlToCourse, platform };
    });

    database.ref(`courses`).set(courseData).then(() => done());
});

test("should request data from firebase and return an array", async () => {
    const courses = await getVisibleCourses();
    expect(courses).toEqual(courses);
}, 20000);