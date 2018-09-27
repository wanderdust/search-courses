import React from "react";
import { connect } from "react-redux";
import CategoriesHeader from "./CategoriesHeader";
import CourseListFilters from "./CourseListFilters";
import queryString from "query-string";


export const SearchResultsPageTop = (props) => {
    const parsedLink = () => {
        const parsed = queryString.parse(props.location.search)
            .query
            .split("%")
            .join(" ");

        return parsed;
    }

    return (
        <div className="search-results-page__top">
            <div>
                {
                    props.category !== "query" ?
                    <CategoriesHeader title={"Category"} category={props.category}/> : 
                    <CategoriesHeader title={"Search"} category={parsedLink()}/> 
                }
                <h4 className="search-results-page__top__title">{props.coursesLength} courses found</h4>
            </div>
            <div>
                <CourseListFilters />
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    coursesLength: state.courses.courseList.length,
    category: state.filters.currentCategory
});

export default connect(mapStateToProps)(SearchResultsPageTop);