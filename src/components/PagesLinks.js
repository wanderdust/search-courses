import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../actions/filters";
import getVisiblePagesLinks from "../selectors/pagesLinks";

export class PagesLinks extends React.Component {
    handleOnClick = (e) => {
        const currentPage = parseInt(e.target.innerHTML, 10);
        this.props.setCurrentPage(currentPage);
    };

    render () {
        return (
            <div>
                {this.props.pagesLinks.map((pageLink) => (
                    <div key={pageLink} onClick={(this.handleOnClick)}>{pageLink}</div>
                ))}
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    pagesLinks: getVisiblePagesLinks(state.courses)
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
});


export default connect(mapStateToProps, mapDispatchToProps)(PagesLinks);



