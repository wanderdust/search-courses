import coursesReducer from "../../reducers/courses";
import courses from "../fixtures/courses";


test("should set the courses default state", () => {
    const data = {
        courseList: [],
        hasFoundResults: true
    };

    const state = coursesReducer(undefined, {type: undefined});

    expect(state).toEqual(data);
});


test("should set the courses for courseList", () => {
    const action = {
        type: "SET_COURSES",
        courseList: courses
    };
    const state = coursesReducer({hasFoundResults: true}, action);

    expect(state).toEqual({
        courseList: courses,
        hasFoundResults: true
    });
});


test("should set the courses for hasFoundResults", () => {
    const action = {
        type: "SET_HAS_FOUND_RESULTS",
        hasFoundResults: false
    };
    const state = coursesReducer({courseList: []}, action);

    expect(state).toEqual({
        courseList: [],
        hasFoundResults: false
    });
});
