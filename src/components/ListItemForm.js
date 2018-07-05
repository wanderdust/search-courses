import React from "react";
import ListForm from "./ListForm";
import AppRouter, { history } from "../routers/AppRouter";

export class ListItemForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    handleOnMouseOver = (e) => {
        this.setState(() => ({
            hovered: true
        }));
    }

    handleOnMouseLeave = () => {
        this.setState(() => ({
            hovered: false
        }));
    }

    render () {
        return (
            <div
                className="dropdown__item"
                data-id={this.props.listItem.id}
                onMouseOver={this.handleOnMouseOver}
                onMouseLeave={this.handleOnMouseLeave}
            >
                {this.props.listItem.name}
                {this.state.hovered && !!this.props.listItem.subTopics && <ListForm history={history} listItems={this.props.listItem.subTopics} />}
            </div>
        )
    }
};

export default ListItemForm;