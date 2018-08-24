import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setCourses, startSetCourses, setHasFoundResults } from "../../actions/courses";

const createMockStore = configureMockStore([thunk]);
const courses = ["one", "two", "three"];

test("should create the correct setCourses action", () => {
    
    expect(setCourses(courses)).toEqual({
        type: "SET_COURSES",
        courseList: courses
    });
});

test("should create the correct setCourses action if no data is passed", () => {
    expect(setCourses()).toEqual({
        type: "SET_COURSES",
        courseList: []
    });
});

test("should create the correct setHasFoundResults action", () => {
    const hasFoundResults = "123Test";

    expect(setHasFoundResults(hasFoundResults)).toEqual({
        type: "SET_HAS_FOUND_RESULTS",
        hasFoundResults
    });
});


test("should create the correct setHasFoundResults action if no data is passed", () => {
    
    expect(setHasFoundResults()).toEqual({
        type: "SET_HAS_FOUND_RESULTS",
        hasFoundResults: true
    });
});