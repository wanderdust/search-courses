/* 
* Search input for the header of the page.
* Uses searchForm component.
*/

import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { currentPage } from "../actions/filters";
import CourseSearchForm from "./CourseSearchForm";

export class CourseSearchHeader extends React.Component {
    onSubmit = (textFilter) => {
        const history = this.props.history;

        this.props.startSetCourses(textFilter);
        
        if (history.location.pathname !== "/search") {
            history.push(`/search/query/${this.props.currentPage}`);
        }
    };
    render () {
        return (
            <CourseSearchForm onSubmit={this.onSubmit} />
        );
    }
}

const mapStateToProps = (state) => ({
    currentPage: state.filters.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchHeader);