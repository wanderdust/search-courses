import React from "react";
import CourseSearchMain from "./CourseSearchMain";

export const MainPage = (props) => {
    return (
        <div className="content-container main-page">
            <CourseSearchMain {...props} />
        </div>
    );
};

export default MainPage;