/* 
* Front Page Component
*/

import React from "react";
import CourseSearchMain from "./CourseSearchMain";

export const MainPage = (props) => {
    return (
        <div>
            <CourseSearchMain {...props} />
        </div>
    );
};

export default MainPage;