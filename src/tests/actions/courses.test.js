import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setCourses, startSetCourses } from "../../actions/courses";

const createMockStore = configureMockStore([thunk]);
const courses = ["one", "two", "three"];

test("should create the correct setCourses action", () => {
    const data = {
        courseList: courses,
        hasFoundResults: false
    }

    expect(setCourses(data)).toEqual({
        type: "SET_COURSES",
        courses: data
    });
});

test("should create the correct setCourses action if no data is passed", () => {
    expect(setCourses()).toEqual({
        type: "SET_COURSES",
        courses: {
            courseList: [],
            hasFoundResults: true
        }
    });
});