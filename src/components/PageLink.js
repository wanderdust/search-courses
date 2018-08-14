import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { setCurrentPage, currentPage, currentCategory } from "../actions/filters";

export class PageLink extends React.Component {
    handleOnClick = (e) => {
        const currentPage = parseInt(e.target.innerHTML, 10);
        this.props.setCurrentPage(currentPage);
        
    };

    render () {
        return (
            <NavLink
                activeClassName="page-link--active"
                className="page-link button button--link"
                to={`/search/${this.props.currentCategory}/${this.props.pageNumber}`}
                onClick={(this.handleOnClick)}
            >
                {this.props.pageNumber}
            </NavLink>
        )
    }
};

const mapStateToProps = (state) => ({
    currentPage: state.filters.currentPage,
    currentCategory: state.filters.currentCategory
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
});


export default connect(mapStateToProps, mapDispatchToProps)(PageLink);


