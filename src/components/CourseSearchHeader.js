/* 
* Search input for the header of the page.
* Uses searchForm component.
*/

import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import CourseSearchForm from "./CourseSearchForm";

export class CourseSearchHeader extends React.Component {
    onSubmit = (textFilter) => {
        const history = this.props.history;

        this.props.startSetCourses(textFilter);
        
        if (history.location.pathname !== "/search") {
            history.push("/search");
        }
    };
    render () {
        return (
            <CourseSearchForm onSubmit={this.onSubmit} />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter))
});

export default connect(undefined, mapDispatchToProps)(CourseSearchHeader);