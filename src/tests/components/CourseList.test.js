import React from "react";
import { CourseList } from "../../components/CourseList";
import { shallow } from "enzyme";
import courses from "../fixtures/courses";
import {setCurrentPage} from "./../../actions/filters"

test("should render the CourseList correctly", () => {
    const match = {params: {page: 1}};
    const location = {location: {search: "Hello world"}};
    const history = {listen: jest.fn()}
    const wrapper = shallow(
        <CourseList
            courses={courses}
            currentPageCourses={courses}
            setCurrentPage={setCurrentPage}
            location={location}
            match={match}
            history={history}
        />);
    
    expect(wrapper).toMatchSnapshot();
});