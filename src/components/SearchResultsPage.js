/* 
* Search results page with all the listed courses.
*/

import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import CourseSearchHeader from "./CourseSearchHeader";
import CategoriesHeader from "./CategoriesHeader";
import PagesLinks from "./PagesLinks";
import CourseListFilters from "./CourseListFilters";
import { topics } from "../utils/categories";

export const SearchResultsPage = (props) => {
    return (
        <div className="content-container"> 
            <div className="search-results-page">
                {props.category !== "query" && <CategoriesHeader category={props.category}/>}
                {props.coursesLength > 0 && <CourseListFilters />}
                <CourseList />
                <PagesLinks />
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    coursesLength: state.courses.length,
    category: state.filters.currentCategory
});

export default connect(mapStateToProps)(SearchResultsPage);