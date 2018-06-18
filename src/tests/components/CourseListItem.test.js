import React from "react";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";
import CourseListItem from "../../components/CourseListItem";

test("should render the CourseListItem correctly", () => {
    const wrapper = shallow(<CourseListItem course={courses[0]}/>);
    
    expect(wrapper).toMatchSnapshot();
});