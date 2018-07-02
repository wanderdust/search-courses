import React from "react";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";
import currentPageCourses from "../selectors/currentPageCourses";

export const CourseList = ({ courses }) => {
    return (
        <div>
            <h4>Course list</h4>
            {courses.map((course) =>(
                <CourseListItem key={course.id} course={course}/>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    courses: currentPageCourses(state.courses, state.filters.currentPage)
});

export default connect(mapStateToProps)(CourseList);

