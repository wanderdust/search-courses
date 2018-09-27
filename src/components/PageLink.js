import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../actions/filters";

export class PageLink extends React.Component {
    handleOnClick = (e) => {
        const currentPage = + e.target.text;
        this.props.history.push(`/search/${currentPage}/${this.props.location.search}`);
        this.props.setCurrentPage(currentPage);
    };

    //Checks which link needs to be active.
    isCurrentPage = () => {
        return this.props.pageNumber == this.props.currentPage;
    }

    render () {
        return (
            <a
                className={`page-link button button--link ${this.isCurrentPage() ? "page-link--active" : ""}`}
                onClick={this.handleOnClick}
            >
                {this.props.pageNumber}
            </a>
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


