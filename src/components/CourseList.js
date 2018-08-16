/* 
* List of all the courses searched.
*/

import React from "react";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";
import currentPageCourses from "../selectors/currentPageCourses";
import sortBy from "../selectors/sortBy";

export const CourseList = ({ currentPageCourses, courses }) => {
    return (
        <div>
            <h4>{courses.length} courses found</h4>
            <div className="course-list">
                {currentPageCourses.map((course) =>(
                    <CourseListItem key={course.id} course={course}/>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const sortedCourses = sortBy(state.courses, state.filters.sortBy);

    return {
        currentPageCourses: currentPageCourses(sortedCourses, state.filters.currentPage),
        courses: sortedCourses
   }
};

export default connect(mapStateToProps)(CourseList);

