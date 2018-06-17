import React from "react";
import CourseSearchMain from "./CourseSearchMain";

export const MainPage = ({ history }) => {
    return (
        <div>
            <CourseSearchMain history={history} />
        </div>
    );
};

export default MainPage;