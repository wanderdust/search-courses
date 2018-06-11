import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setCourses, startSetCourses } from "../../actions/courses";

test("should create the correct setCourses action", () => {
    const courses = ["one", "two", "three"];

    expect(setCourses(courses)).toEqual({
        type: "SET_COURSES",
        courses
    });
});

test("should set up the state with the correct data", () => {

});