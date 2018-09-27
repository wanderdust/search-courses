import React from "react";
import CourseSearchForm from "./CourseSearchForm";

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
        
        if (history.location.pathname !== "/search") {
            this.props.history.push({
                pathname: `/search/1/`,
                search: `?category=query&query=${textFilter.split(" ").join("%")}`
            });
        }
    }

    render () {
        return (
            <div className="search-wrapper header-element header-element--search">

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

export default CourseSearchHeader;