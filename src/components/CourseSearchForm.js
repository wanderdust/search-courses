import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { Link } from "react-router-dom";

export class CourseSearchForm extends React.Component {
    state = {
        textFilter: ""
    };
    onTextChange = (e) => {
        const textFilter = e.target.value;

        this.setState(() => ({textFilter}));
    };
    handleOnSubmit = (e) => {
        e.preventDefault();
        const textFilter = this.state.textFilter;

        if (textFilter.trim()) {
            this.props.onSubmit(textFilter);
        }  
    };
    render () {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input
                    value={this.props.textFilter}
                    type="text"
                    autoFocus
                    placeholder="What are you looking for?"
                    onChange={this.onTextChange}
                >
                </input>
                <button type="submit">Search</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter))
});

export default connect(undefined, mapDispatchToProps)(CourseSearchForm);