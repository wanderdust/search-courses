import React from "react";
import CourseListItem from "../../components/CourseListItem";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";

test("should render the CourseListItem correctly", () => {
    const wrapper = shallow(<CourseListItem course={courses[0]}/>);
    
    expect(wrapper).toMatchSnapshot();
});