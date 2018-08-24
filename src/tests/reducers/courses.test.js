import coursesReducer from "../../reducers/courses";
import courses from "../fixtures/courses";

test("should set the courses for courseList and hasFoundResults", () => {
    const data =  {
        courseList: courses,
        hasFoundResults: true
    };

    const action = {
        type: "SET_COURSES",
        courses: data
    };
    const state = coursesReducer({}, action);

    expect(state).toEqual(data);
});
