import React from "react";
import ListForm from "./ListForm";
import AppRouter, { history } from "../routers/AppRouter";

export const DropdownForm = (props) => {
    return (
        <div className="dropdown">
           <div>{props.dropdownTitle}</div>
           <div className="dropdown__menu">
                <ListForm history={history} listItems={props.listItems}/>
            </div>
        </div>
    );
};

export default DropdownForm;
