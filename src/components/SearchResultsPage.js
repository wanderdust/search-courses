import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import PagesLinks from "./PagesLinks";
import SearchResultsPageTop from "./SearchResultsPageTop";

export const SearchResultsPage = (props) => {
    return (
        <div className="content-container"> 
            <div className="search-results-page">
                {props.coursesLength > 0  && <SearchResultsPageTop />}
                <CourseList />
                <PagesLinks />
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    coursesLength: state.courses.length,
    currentCategory: state.filters.currentCategory
});

export default connect(mapStateToProps)(SearchResultsPage);