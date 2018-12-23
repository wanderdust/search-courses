import React from "react";
import { connect } from "react-redux";
import MetaTags from 'react-meta-tags';
import CourseList from "./CourseList";
import PagesLinks from "./PagesLinks";
import SearchResultsPageTop from "./SearchResultsPageTop";
import NoResultsFoundPage from "./NoResultsFoundPage";
import LoadingPage from "./LoadingPage";

export const SearchResultsPage = (props) => {
    return (
        <div>
            <MetaTags>
                <title>Search online courses | CourseSearch</title>
                <meta name="description" content="Search and compare thousands of online FREE courses and MOOCs from the best platforms on Course Search." />
            </MetaTags>
            
            {props.hasFoundResults === "pending" && <LoadingPage /> }
            {props.hasFoundResults ? (
                <div className="search-results-page">
                    {props.coursesLength > 0  && <SearchResultsPageTop location={props.location}/>}
                    <CourseList match={props.match} location={props.location} history={props.history}/>
                    <PagesLinks match={props.match} location={props.location}/>
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