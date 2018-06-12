import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";

export class CourseListSearch extends React.Component {
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
        
        this.props.startSetCourses(textFilter);
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

export default connect(undefined, mapDispatchToProps)(CourseListSearch);