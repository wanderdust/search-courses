import React from "react";
import { connect } from "react-redux";
import { setSearchQuery } from "../actions/filters";
import CourseSearchForm from "./CourseSearchForm";

export class CourseSearchMain extends React.Component {
    componentWillMount () {
        this.props.setSearchQuery("");
    };
    onSubmit = (textFilter) => {
        this.props.history.push({
            pathname: `/search/1/`,
            search: `?category=query&query=${textFilter.split(" ").join("%")}`
        });
    };
    render () {
        return (
            <div className="search-wrapper search-main">
                <div className="search-main__logo-container">
                    <img src="../../images/coursesearch-logo.png" alt="website logo"/>
                </div>
                <div className="search-main__input">
                    <CourseSearchForm onSubmit={this.onSubmit} formClass=""/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSearchQuery: (textFilter) => dispatch(setSearchQuery(textFilter))
});

export default connect(undefined, mapDispatchToProps)(CourseSearchMain);