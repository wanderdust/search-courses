import React from "react";
import { CourseInfoPage } from "../../components/CourseInfoPage";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";

test("should render the CourseList correctly", () => {
    const match = {params: {id: 3}};
    const wrapper = shallow(<CourseInfoPage match={match}/>);
    
    expect(wrapper).toMatchSnapshot();
});