const { getVisibleCourses } = require("../../selectors/courses");

test("should request data from api and return an array", async () => {
    const courses = await getVisibleCourses();
    expect(Array.isArray(courses)).toBeTruthy();
}, 20000);