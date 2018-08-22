/* 
* The number of pages with more results at the bottom of the list.
*/

import React from "react";
import { connect } from "react-redux";
import {getVisiblePagesLinks, getCurrentPagination} from "../selectors/pagesLinks";
import PageLink from "./PageLink";
import { setCurrentPage } from "../actions/filters";
import { history } from "../routers/AppRouter";


export class PagesLinks extends React.Component  {
    numberOfVisiblePages = 4;

    willShowNext = () => {
        const hasSuperiorLength = this.props.pagesLinks.length > this.numberOfVisiblePages;
        const isLastPageLinkNotVisible = this.props.currentPage <= this.props.pagesLinks.length - 2;

        return hasSuperiorLength && isLastPageLinkNotVisible;
    }

    willShowPrev = () => {
        const hasSuperiorLength = this.props.pagesLinks.length > this.numberOfVisiblePages;
        const isFirstPageLinkNotVisible = this.props.currentPage >= 4;

        return hasSuperiorLength && isFirstPageLinkNotVisible;
    }

    goToNextPage = () => {
        const nextPage = this.props.currentPage + 1;

        this.props.setCurrentPage(nextPage);
        history.push(`/search/${this.props.currentCategory}/${nextPage}`);
    }

    goToPrevPage = () => {
        const prevPage = this.props.currentPage - 1;

        this.props.setCurrentPage(prevPage);
        history.push(`/search/${this.props.currentCategory}/${prevPage}`);
    }
    
    render () {
        return (
            <div className="pagination-wrapper">
                <ul className="pagination">
                    {this.willShowPrev() &&
                        <li
                            onClick={this.goToPrevPage}
                            className="page-link button button--link page-link--secondary icon-container"
                        > 
                            <img src="../../images/icons/chevron-left-icon.svg"/>
                        </li>
                    }
                    {this.props.visiblePagination.map((pageLink) => (
                        <li key={pageLink} className="">
                            <PageLink pageNumber={pageLink}/>
                        </li>
                    ))}
                    {this.willShowNext() && <li className="page-link button button--link page-link--disabled ">...</li> }
                    {this.willShowNext() &&
                        <li onClick={this.goToNextPage} className="page-link button button--link page-link--secondary">
                            <img src="../../images/icons/chevron-right-icon.svg"/>
                        </li>
                    }
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
        const currentPage = state.filters.currentPage;
        const pagesLinks = getVisiblePagesLinks(state.courses);

        return {
            currentPage,
            pagesLinks,
            visiblePagination: getCurrentPagination(pagesLinks, currentPage),
            currentCategory: state.filters.currentCategory
        }
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PagesLinks);



