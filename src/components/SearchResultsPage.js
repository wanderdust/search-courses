import React from "react";
import CourseList from "./CourseList";
import CourseSearchHeader from "./CourseSearchHeader";
import PagesLinks from "./PagesLinks";
import { CourseListFilters } from "./CourseListFilters";

export const SearchResultsPage = (props) => {
    return (
        <div>
            <CourseListFilters />
            <CourseList />
            <PagesLinks />
        </div>
    );
};

export default SearchResultsPage;