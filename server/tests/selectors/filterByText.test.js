const { filterByText } = require("../../selectors/filterByText");
const { courses } = require("../fixtures/courses");

test("should filter by text", () => {
    const filteredCourses = filterByText(courses, "angular");

    expect(filteredCourses).toEqual([
        courses[0],
        courses[2]
    ]);
});