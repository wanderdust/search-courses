import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../actions/filters";

export class PagesLinks extends React.Component {
    handleOnClick = (e) => {
        const currentPage = parseInt(e.target.innerHTML, 10);
        this.props.setCurrentPage(currentPage);
    };

    render () {
        return (
            <div>
                <div onClick={(this.handleOnClick)}>1 </div>
                <div onClick={(this.handleOnClick)}>2 </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
});


export default connect(undefined, mapDispatchToProps)(PagesLinks);



