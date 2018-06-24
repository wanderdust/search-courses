const { filterByText } = require("../../selectors/filterByText");
const { courses } = require("../fixtures/courses");

test("should filter by text and sort by keywords matched", () => {
    const filteredCourses = filterByText(courses, "angular");

    expect(filteredCourses).toEqual([
        courses[0],
        courses[2]
    ]);
});