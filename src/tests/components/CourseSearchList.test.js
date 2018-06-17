import React from "react";
import { shallow } from "enzyme";
import { CourseSearchList } from "../../components/CourseSearchList";

let wrapper, startSetCourses;

beforeEach(() => {
    startSetCourses = jest.fn();
    wrapper = shallow(
        <CourseSearchList
            startSetCourses={startSetCourses}
        />);
});

test("should render CourseSearchList correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit correctly", () => {
    const text = "Hello world";

    wrapper.find("Connect(CourseSearchForm)").prop("onSubmit")(text);
    expect(startSetCourses).toHaveBeenCalledWith(text);
});