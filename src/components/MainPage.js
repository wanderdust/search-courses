import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";

export const MainPage = () => {
    return (
        <div>
            <CourseList />
        </div>
    );
};

export default MainPage;