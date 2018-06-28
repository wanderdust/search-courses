import React from "react";
import { connect } from "react-redux";
import { startSetCourses, setCourses } from "../actions/courses";
import { setSearchQuery } from "../actions/filters";
import CourseSearchForm from "./CourseSearchForm";

export class CourseSearchMain extends React.Component {
    componentWillMount () {
        this.props.setSearchQuery("");
    };
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
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter)),
    setSearchQuery: (textFilter) => dispatch(setSearchQuery(textFilter))
});

export default connect(undefined, mapDispatchToProps)(CourseSearchMain);