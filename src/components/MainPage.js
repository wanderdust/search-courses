import React from "react";
import {ReactTitle} from 'react-meta-tags';
import CourseSearchMain from "./CourseSearchMain";
import { MainPageData } from "./MainPageData";

export const MainPage = (props) => {
    return (
        <div className="main-page">
            <ReactTitle title="CourseSearch | Find & compare the best free online Courses & MOOC"/>
            
            <CourseSearchMain {...props} />
            <MainPageData />
        </div>
    );
};

export default MainPage;