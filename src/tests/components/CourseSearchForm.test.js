import React from "react";
import { CourseSearchForm } from "../../components/CourseSearchForm";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";

let wrapper, onSubmit;

beforeEach(() => {
    onSubmit = jest.fn();
    wrapper = shallow(
        <CourseSearchForm 
            onSubmit={onSubmit}
        />);
});

test("should render CourseSearchForm correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should call onTextChange with correct data", () => {
    const text = "Hello world!";

    wrapper.setState({textFilter: text});
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(onSubmit).toHaveBeenCalledWith(text);
});

test("should handle on text change", () => {
    const value = "Hakuna Matata!";

    wrapper.setState({textFilter: value});
    wrapper.find("input").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("textFilter")).toBe(value);
});