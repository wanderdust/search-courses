import React from "react";
import { shallow } from "enzyme";
import { CourseSearchHeader } from "../../components/CourseSearchHeader";

let wrapper, startSetCourses;

beforeEach(() => {
    startSetCourses = jest.fn();
    wrapper = shallow(
        <CourseSearchHeader
            startSetCourses={startSetCourses}
        />);
});

test("should render CourseSearchHeader correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit correctly", () => {
    const text = "Hello world";

    wrapper.find("Connect(CourseSearchForm)").prop("onSubmit")(text);
    expect(startSetCourses).toHaveBeenCalledWith(text);
});