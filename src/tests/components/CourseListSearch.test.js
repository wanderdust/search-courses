import React from "react";
import { CourseListSearch } from "../../components/CourseListSearch";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";

let wrapper, startSetCourses;

beforeEach(() => {
    startSetCourses = jest.fn();
    wrapper = shallow(
        <CourseListSearch 
            startSetCourses={startSetCourses}
        />);
});

test("should render CourseListSearch correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should call onTextChange with correct data", () => {
    const text = "Hello world!";

    wrapper.setState({textFilter: text});
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(startSetCourses).toHaveBeenCalledWith(text);
});

test("should handle on text change", () => {
    const value = "Hakuna Matata!";

    wrapper.setState({textFilter: value});
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("textFilter")).toBe(value);
});