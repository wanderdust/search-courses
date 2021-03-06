import React from "react";
import DropdownMenu, { NestedDropdownMenu } from "react-dd-menu";
import { history } from "../routers/AppRouter";
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
            <div className="header-element header-element--categories">
                <DropdownMenu 
                    align="left"
                    animate={false}
                    close={this.handleClose}
                    enterTimeout={0}
                    isOpen={this.state.isMenuOpen}
                    leaveTimeout={0}
                    toggle={
                        <div className="icon-container pointer" onClick={this.handleToggle}>
                            <img className="icon-medium" src="../../images/categories_icon.svg" alt="categories icon dropdown"></img>
                            <p className="icon-container__text show-for-desktop">Categories</p>
                        </div>
                    }
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
