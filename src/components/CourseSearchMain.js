import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { setSearchQuery } from "../actions/filters";
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
            <div className="search-wrapper search-main">
                <div className="search-main__logo-container">
                    <img src="../../images/coursesearch-logo.png" />
                </div>
                <div className="search-main__input">
                    <CourseSearchForm onSubmit={this.onSubmit} formClass=""/>
                </div>
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