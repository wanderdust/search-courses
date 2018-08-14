/* 
* Search input for the main page Component.
* Uses searchForm component.
*/

import React from "react";
import { connect } from "react-redux";
import { startSetCourses, setCourses } from "../actions/courses";
import { setSearchQuery, currentPage } from "../actions/filters";
import CourseSearchForm from "./CourseSearchForm";

export class CourseSearchMain extends React.Component {
    componentWillMount () {
        this.props.setSearchQuery("");
    };
    onSubmit = (textFilter) => {
        this.props.startSetCourses(textFilter);
        this.props.history.push(`/search/query/${this.props.currentPage}`);
    };
    render () {
        return (
            <div>
                <CourseSearchForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPage: state.filters.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter)),
    setSearchQuery: (textFilter) => dispatch(setSearchQuery(textFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchMain);