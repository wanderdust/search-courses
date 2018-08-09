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

    handleClose = () => {
        this.setState({ isMenuOpen: false });
    }
    
    render () {
        return (
            <div className="dropdown__container">
                <DropdownMenu 
                    align="left"
                    animate={false}
                    close={this.handleClose}
                    enterTimeout={0}
                    isOpen={this.state.isMenuOpen}
                    leaveTimeout={0}
                    toggle={<button type="button" onClick={this.handleToggle}>Categories</button>}
                >
                    {this.props.categories.map((category) => {
                        return (
                            <div key={category.id}>
                                {
                                    !category.subTopics &&
                                    (
                                        <div>
                                            <li><DropDownItem history={history} {...category}/></li>
                                        </div>
                                    ) ||
                                    (
                                        <NestedDropdownMenu 
                                            toggle={<DropDownItem history={history} {...category}/>}
                                            delay={0}
                                        >
                                            {category.subTopics.map((subTopic) => {
                                                return <li key={subTopic.id}> <DropDownItem history={history} {...subTopic}/> </li>
                                            })}
                                        </NestedDropdownMenu>
                                    )
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
