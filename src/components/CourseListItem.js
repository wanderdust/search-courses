import React from "react";
import { Link } from "react-router-dom";

const CourseListItem = ({course}) => {
    return (
        <div className="course-card-wrapper">
            <Link to={`/course/${course.id}`}>

                <div className="course-card__img-container">
                    <img className="image" src={!!course.image ? `${course.image}` : "../../images/course-placeholder.png"} alt="course image placeholder"/>
                </div>

                <div className="course-card__content">
                    <h4>{course.title}</h4>
                    <p className="show-for-desktop">{course.description}</p>

                    <div className="course-card__content__footer">
                        <div className="course-card__content__footer__data">
                            <div><p>{course.price === 0 ? "Free" : course.price}</p></div>

                            { course.duration != "" &&
                                <div className="">
                                    <p>{course.duration}</p>
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