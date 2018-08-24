import React from "react";
import { connect } from "react-redux";
import CategoriesHeader from "./CategoriesHeader";
import CourseListFilters from "./CourseListFilters";


export const SearchResultsPageTop = (props) => {
    return (
        <div className="search-results-page__top">
            <div>
                {props.category !== "query" && <CategoriesHeader category={props.category}/>}
                <h4>{props.coursesLength} courses found</h4>
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