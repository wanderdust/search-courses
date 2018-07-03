import React from "react";
import { connect } from "react-redux";

export const CategoriesHeader = (props) => {
    return (
        <div>
            <div>Showing categories for: {props.category.name}</div>
        </div>
    );
};

export default CategoriesHeader;