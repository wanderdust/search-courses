import React from "react";
import { shallow } from "enzyme";
import { CourseSearchMain } from "../../components/CourseSearchMain";

let wrapper, startSetCourses, history;

beforeEach(() => {
    startSetCourses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <CourseSearchMain
            startSetCourses={startSetCourses}
            history={history}
        />);
});

test("should render CourseSearchMain correctly", () => {
    expect(wrapper).toMatchSnapshot();
});


test("should handle onSubmit correctly", () => {
    const text = "Hello world";

    wrapper.find("Connect(CourseSearchForm)").prop("onSubmit")(text);
    expect(startSetCourses).toHaveBeenCalledWith(text);
    expect(history.push).toHaveBeenCalledWith("/search");
});