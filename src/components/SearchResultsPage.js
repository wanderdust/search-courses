import React from "react";
import CourseList from "./CourseList";
import CourseSearchList from "./CourseSearchList";

export const SearchResultsPage = ({ history }) => {
    return (
        <div>
            <CourseSearchList history={history}/>
            <CourseList />
        </div>
    );
};

export default SearchResultsPage;