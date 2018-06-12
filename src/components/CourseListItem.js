import React from "react";

const CourseListItem = (props) => {
    return (
        <div>
            <p>{props.course.title}</p>
        </div>
    );
};

export default CourseListItem;