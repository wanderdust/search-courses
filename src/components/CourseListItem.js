import React from "react";
import { Link } from "react-router-dom";

const CourseListItem = ({course, isShortVersion}) => {
    return (
        <div className={`course-card-wrapper ${isShortVersion ? "course-card--short" : ""}`}>
            <Link to={`/course/${course.id}`}>

                {!isShortVersion && 
                    <div className="course-card__img-container">
                        <img className="image" src={!!course.image ? `${course.image}` : "../../images/course-placeholder.png"} alt="course image placeholder"/>
                    </div>
                }

                <div className="course-card__content">
                    <h4 className="title">{course.title}</h4>
                    {!isShortVersion && 
                        <p className="show-for-desktop">{course.shortSummary}</p>
                    }

                    <div className="course-card__content__footer">
                        <div className="course-card__content__footer__data">
                            <div><p className="title">{course.showPrice}</p></div>

                            { course.duration != "" &&
                                <div className="">
                                    <p className="title">{course.duration}</p>
                                </div>
                            }
                        </div>
                        
                        <div className="icon-container partner-logo-container">
                            <img src={`/../../images/${course.logo}`} alt="partner logo"/>
                        </div>
                    </div>
                </div>

            </Link>

        </div>
    );
};

export default CourseListItem;