import React from "react";
 
const NoResultsFound = () => (
    <div className="failed-search-wrapper">
        <div className="failed-search">
            <h1 className="failed-search__title">No matching courses found</h1>
            <p className="failed-search__text">Please modify your search</p>
        </div>
    </div>
);

export default NoResultsFound;