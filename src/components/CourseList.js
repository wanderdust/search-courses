/* 
* List of all the courses searched.
*/

import React from "react";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";
import currentPageCourses from "../selectors/currentPageCourses";

export const CourseList = ({ currentPageCourses, courses }) => {
    return (
        <div>
            <h4>{courses.length} courses found</h4>
            {currentPageCourses.map((course) =>(
                <CourseListItem key={course.id} course={course}/>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentPageCourses: currentPageCourses(state.courses, state.filters.currentPage),
    courses: state.courses
});

export default connect(mapStateToProps)(CourseList);

