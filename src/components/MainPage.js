import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import CourseListSearch from "./CourseListSearch";

export const MainPage = () => {
    return (
        <div>
            <CourseListSearch />
            <CourseList />
        </div>
    );
};

export default MainPage;