import coursesReducer from "../../reducers/courses";
import courses from "../fixtures/courses";

test("should set the courses", () => {
    const action = {
        type: "SET_COURSES",
        courses
    };
    const state = coursesReducer({}, action);

    expect(state).toEqual(courses);
});
