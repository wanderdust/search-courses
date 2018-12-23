import React from "react";
import MetaTags from 'react-meta-tags';
import CourseSearchMain from "./CourseSearchMain";
import { MainPageData } from "./MainPageData";

export const MainPage = (props) => {
    return (
        <div className="main-page">
            <MetaTags>
                <title>CourseSearch | Find & compare the best free online Courses & MOOC</title>
                <meta name="description" content="Search and compare thousands of online FREE courses and MOOCs from the best platforms on Course Search." />
            </MetaTags>
        
            <CourseSearchMain {...props} />
            <MainPageData />
        </div>
    );
};

export default MainPage;