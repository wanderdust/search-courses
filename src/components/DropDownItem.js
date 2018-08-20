/* 
* Form for dropdown menus (individual item).
*/

import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { setCurrentCategory, currentPage } from "../actions/filters";

export class DropDownItem extends React.Component {
    handleOnClick = () => {
        this.props.startSetCourses(this.props.tags);
        this.props.setCurrentCategory(this.props.name);
        this.props.history.push(`/search/${this.props.name}/${this.props.currentPage}`);
    }

    render () {
        return (
            <div className="category-item" onClick={this.handleOnClick}>
                { !!this.props.icon && 
                    <div className="icon-container">
                        <img className="icon-small" src={`../../images/icons/${this.props.icon}.svg`}></img>
                    </div>
                }
                <p>{this.props.name}</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    currentPage: state.filters.currentPage
});

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter)),
    setCurrentCategory: (category) => dispatch(setCurrentCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownItem);