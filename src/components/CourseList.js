import React from "react";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";

export const CourseList = ({ courses }) => {
    return (
        <div>
            <p>Course list</p>
            {courses.map((course) =>(
                <CourseListItem key={course} course={course}/>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    courses: state.courses
});

export default connect(mapStateToProps)(CourseList);

