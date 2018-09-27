import React from "react";

export class DropDownItem extends React.Component {
    handleOnClick = () => {
        const search = this.props.tags.split(" ").join("%");

        this.props.history.push({
            pathname: `/search/1/`,
            search: `?category=${this.props.purpose}&query=${search}`
        });
    }

    render () {
        return (
            <div className="category-item" onClick={this.handleOnClick}>
                { !!this.props.icon && 
                    <div className="icon-container">
                        <img className="icon-small" src={`../../images/icons/${this.props.icon}.svg`} alt="category icon"></img>
                    </div>
                }
                <p>{this.props.name}</p>
            </div>
        )
    }
};

export default DropDownItem;