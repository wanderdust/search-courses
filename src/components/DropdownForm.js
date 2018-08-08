/* 
* Form for dropdown menus.
*/

import React from "react";
import DropdownMenu, { NestedDropdownMenu } from "react-dd-menu";
import AppRouter, { history } from "../routers/AppRouter";
import DropDownItem from "./DropDownItem";

export class DropdownForm extends React.Component {
    state = {isMenuOpen: false}

    handleToggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    close = () => {
        this.setState({ isMenuOpen: false });
    }
    
    render () {
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: <button type="button" onClick={this.handleToggle}>Categories</button>,
            align: 'right',
            className: "dropdown__menu"
          };

        return (
            <div>
                <DropdownMenu {...menuOptions}>
                    {this.props.listItems.map((topic) => {
                        const nestedProps = {
                            toggle:<DropDownItem {...topic}/>
                        };

                        return (
                            <div key={topic.id}>
                                {
                                    !topic.subTopics &&
                                    <DropDownItem {...topic}/> ||
                                    <NestedDropdownMenu {...nestedProps}>
                                       {topic.subTopics.map((subTopic) => {
                                           return <li key={subTopic.id}> <DropDownItem {...subTopic}/> </li>
                                       })}
                                    </NestedDropdownMenu>
                                }
                            </div>
                        )
                    })}
                </DropdownMenu>
            </div>
        );
    }
};

export default DropdownForm;
