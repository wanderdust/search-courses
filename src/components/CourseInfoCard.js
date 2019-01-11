import React from "react";

export class CourseInfoCard  extends React.Component {

    render () {
        return (
            <div className="col col--right col--fixed"> 
                <div className="icon-container">
                    <img className="course-image" src={this.props.image} alt="course image"/>
                </div>
    
                <div className="summary-details">
                    <h2>{this.props.showPrice}</h2>
                    <a className="summary-details__link-to-course summary-details__item" href={this.props.urlToCourse} target="_blank">
                        <button className="button">
                            View course
                        </button>
                    </a>
                    <div className="summary-details__item">
                        <p className="bold">Platform:</p>
                        <p className="summary-details__item__data"> {this.props.platform}</p>
                    </div>
                    
                    {
                        !!this.props.duration &&
                        <div className="summary-details__item">
                            <p className="bold">Duration:</p>
                            <p className="summary-details__item__data"> {this.props.duration}</p>
                        </div>
                    }
                    
                    {
                        !!this.props.difficulty && 
                        <div className="summary-details__item">
                            <p className="bold">Difficulty:</p>
                            <p className="summary-details__item__data">{this.props.difficulty}</p>
                        </div>
                    }
                    
                    {
                        !!this.props.partners &&
                        <div className="summary-details__item">
                            <p className="bold">Partners</p>
                            <p className="summary-details__item__data">{this.props.partners}</p>
                        </div>
                    }
                    
                    <div className="summary-details__item">
                        <p className="bold">Certificate:</p>
                        <p className="summary-details__item__data"> {this.props.hasCertificate ? "Yes" : "No"}</p>
                    </div>
                </div>
    
            </div>
        )
    }
}