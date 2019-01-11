import React from "react";
import { connect } from "react-redux";
import CategoriesHeader from "./CategoriesHeader";
import CourseListFilters from "./CourseListFilters";
import queryString from "query-string";


export const SearchResultsPageTop = (props) => {
    const extractQuery = (flag) => {
        return queryString.parse(props.location.search)[flag];
    }

    const parsedUrl = (url) => {
        return url.split("%").join(" ");
    }

    return (
        <div className="search-results-page__top">
            <div>
                {
                    props.category !== "query" ?
                    <CategoriesHeader title={"Category"} category={parsedUrl(extractQuery("category"))}/> : 
                    <CategoriesHeader title={"Search"} category={parsedUrl(extractQuery("query"))}/> 
                }
                <h4 className="search-results-page__top__title">{props.coursesLength} courses found</h4>
            </div>
            <div>
                <CourseListFilters />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    coursesLength: state.courses.courseList.length,
    category: state.filters.currentCategory
});

export default connect(mapStateToProps)(SearchResultsPageTop);