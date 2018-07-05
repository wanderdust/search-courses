import React from "react";
import { connect } from "react-redux";
import ListItemForm from "./ListItemForm";
import AppRouter, { history } from "../routers/AppRouter";
import { startSetCourses } from "../actions/courses";
import { setCurrentCategory } from "../actions/filters";


export class ListForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            listItems : props.listItems
        }
    }

    handleOnClick = (e) => {
        e.stopPropagation();
        const item = this.state.listItems.find((listItem)=> {
            return e.target.dataset.id === listItem.id;
        });

        this.props.startSetCourses(item.tags);
        this.props.setCurrentCategory(item.name);
        this.props.history.push(`/search/${item.purpose}`);
    }

    render () {
        return (
            <ul
                className="dropdown__menu__list"
                onClick={this.handleOnClick}
            >
                {this.state.listItems.map((listItem) => {
                    return <li key={listItem.id}> <ListItemForm history={history} listItem={listItem}/> </li>
                })}
            </ul>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter)),
    setCurrentCategory: (category) => dispatch(setCurrentCategory(category)) 
});

export default connect(undefined, mapDispatchToProps)(ListForm);

