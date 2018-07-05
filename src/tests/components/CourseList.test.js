import React from "react";
import { CourseList } from "../../components/CourseList";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";

test("should render the CourseList correctly", () => {
    const wrapper = shallow(<CourseList courses={courses} currentPageCourses={courses}/>);
    
    expect(wrapper).toMatchSnapshot();
});