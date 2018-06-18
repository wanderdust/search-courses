import React from "react";
import CourseList from "./CourseList";
import CourseSearchHeader from "./CourseSearchHeader";
import { CourseListFilters } from "./CourseListFilters";

export const SearchResultsPage = () => {
    return (
        <div>
            <CourseListFilters />
            <CourseList />
        </div>
    );
};

export default SearchResultsPage;