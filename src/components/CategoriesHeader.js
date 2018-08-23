import React from "react";

export const CategoriesHeader = (props) => {
    return (
        <div className="search_results_page__categories">
            <div>Category: <span>{props.category}</span></div>
        </div>
    );
};

export default CategoriesHeader;