import React from "react";
import { shallow } from "enzyme";
import { CourseListFilters } from "../../components/CourseListFilters";

test("should render CourseListFilters correctly", () => {
    const wrapper = shallow(<CourseListFilters />);

    expect(wrapper).toMatchSnapshot();
});