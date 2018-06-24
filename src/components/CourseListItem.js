import React from "react";

const CourseListItem = ({course}) => {
    return (
        <div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>price: {course.price === 0 ? "free" : course.price}</p>
            <p>{course.platform}</p>
            <a href={course.urlToCourse}>url_to_course</a>
        </div>
    );
};

export default CourseListItem;