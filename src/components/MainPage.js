import React from "react";
import CourseSearchMain from "./CourseSearchMain";
import { MainPageData } from "./MainPageData";

export const MainPage = (props) => {
    return (
        <div className="main-page">
            <CourseSearchMain {...props} />
            <MainPageData />
        </div>
    );
};

export default MainPage;