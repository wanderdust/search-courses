import React from "react";

export const DataCard = (props) => {
    return (
        <div className="data-card show-for-desktop">
            <div className="icon-container">
                <img className="icon-xlarge" src={props.image} alt="instructions" />
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default DataCard;