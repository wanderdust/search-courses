import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import CourseSearchForm from "./CourseSearchForm";

export class CourseSearchMain extends React.Component {
    onSubmit = (textFilter) => {
        this.props.startSetCourses(textFilter);
        this.props.history.push("/search");
    };
    render () {
        return (
            <div>
                <CourseSearchForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter))
});

export default connect(undefined, mapDispatchToProps)(CourseSearchMain);