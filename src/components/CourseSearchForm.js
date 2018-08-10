/* 
* Form for search inputs.
*/

import React from "react";
import { connect } from "react-redux";
import { setSearchQuery, setCurrentPage, setCurrentCategory } from "../actions/filters";

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
            this.props.setCurrentPage();
            this.props.setCurrentCategory();
        }
    };
    render () {
        return (
            <div className="search-wrapper header-element">
                <form className="search-wrapper__form" onSubmit={this.handleOnSubmit}>
                    <input
                        className="text-input"
                        value={this.props.searchQuery}
                        type="text"
                        autoFocus
                        placeholder="What are you looking for?"
                        onChange={this.onTextChange}
                    >
                    </input>
                    <button className="button button--search" type="submit">
                        <i className="material-icons">search</i>
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchQuery: state.filters.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    setSearchQuery: (textFilter) => dispatch(setSearchQuery(textFilter)),
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
    setCurrentCategory: (category) => dispatch(setCurrentCategory(category)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchForm);