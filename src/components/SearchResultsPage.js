import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import PagesLinks from "./PagesLinks";
import SearchResultsPageTop from "./SearchResultsPageTop";
import NoResultsFoundPage from "./NoResultsFoundPage";
import LoadingPage from "./LoadingPage";

export const SearchResultsPage = (props) => {
    return (
        <div>
        {props.hasFoundResults === "pending" && <LoadingPage /> }
        {props.hasFoundResults ? (
                <div className="search-results-page">
                    {props.coursesLength > 0  && <SearchResultsPageTop />}
                    <CourseList />
                    <PagesLinks />
                </div>
            ) : <NoResultsFoundPage /> 
        }
            
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    coursesLength: state.courses.courseList.length,
    currentCategory: state.filters.currentCategory,
    hasFoundResults: state.courses.hasFoundResults
});

export default connect(mapStateToProps)(SearchResultsPage);