import React from "react";
import { connect } from "react-redux";
import CourseList from "./CourseList";
import CourseSearchHeader from "./CourseSearchHeader";
import CategoriesHeader from "./CategoriesHeader";
import PagesLinks from "./PagesLinks";
import { CourseListFilters } from "./CourseListFilters";
import { topics } from "../utils/categories";

export const SearchResultsPage = (props) => {
    return (
        <div>
            {!!props.match.params.category && <CategoriesHeader category={props.category}/>}
            {props.coursesLength > 0 && <CourseListFilters />}
            <CourseList />
            <PagesLinks />
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    coursesLength: state.courses.length,
    category: topics.find((topic) => topic.purpose === props.match.params.category)
});

export default connect(mapStateToProps)(SearchResultsPage);