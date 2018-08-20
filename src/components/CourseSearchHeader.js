/* 
* Search input for the header of the page.
* Uses searchForm component.
*/

import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { currentPage } from "../actions/filters";
import CourseSearchForm from "./CourseSearchForm";
import DropdownMenu from 'react-dd-menu';

export class CourseSearchHeader extends React.Component {
    state = {isSearchOpen: false}

    toggleSearch = () => {
        const toggle = !this.state.isSearchOpen;
        this.setState((state) => ({isSearchOpen: toggle}));
    }

    handleOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleClose()
        }
    }

    handleClose = (e) => {
        this.setState((state) => ({isSearchOpen: false}));
    }

    onSubmit = (textFilter) => {
        const history = this.props.history;

        this.props.startSetCourses(textFilter);
        
        if (history.location.pathname !== "/search") {
            history.push(`/search/query/${this.props.currentPage}`);
        }
    }

    render () {
        return (
            <div className="search-wrapper header-element">

                <div className="show-for-desktop">
                    <CourseSearchForm onSubmit={this.onSubmit} formClass=""/>
                </div>

                <div className="show-for-mobile search-mobile" onKeyUp={this.handleOnKeyUp}>
                    { this.state.isSearchOpen && 
                        <CourseSearchForm 
                            onSubmit={this.onSubmit} 
                            formClass="search-header-mobile"
                            handleClose={this.handleClose}
                        />
                    }
                    <i className='material-icons'
                        onClick={this.toggleSearch}
                    >search</i>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPage: state.filters.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearchHeader);