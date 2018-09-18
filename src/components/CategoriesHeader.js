import React from "react";

export const CategoriesHeader = (props) => {
    return (
        <div className="search_results_page__categories">
            <div className="search-results-page__top__title">Category: <span>{props.category}</span></div>
        </div>
    );
};

export default CategoriesHeader;