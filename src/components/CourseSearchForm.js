import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { setSearchQuery } from "../actions/filters";

export class CourseSearchForm extends React.Component {
    onTextChange = (e) => {
        const textFilter = e.target.value;

        this.props.setSearchQuery(textFilter);
    };
    handleOnSubmit = (e) => {
        e.preventDefault();
        const textFilter = this.props.searchQuery;

        if (textFilter.trim()) {
            this.props.onSubmit(textFilter);
            this.props.setSearchQuery(textFilter);
        }
    };
    render () {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input
                    value={this.props.searchQuery}
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

const mapStateToProps = (state) => ({
    searchQuery: state.filters.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter)),
    setSearchQuery: (textFilter) => dispatch(setSearchQuery(textFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchForm);