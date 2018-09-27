import React from "react";
import ReactMarkdown from "react-markdown";

//Re-usable component with the syllabus and description of the course.
const CourseDescription = ({description, syllabus, platform, about}) => {
    return (
        <div>
            {!!description &&
                <div className="description-block">
                    <h2>About this course</h2>
                    <ReactMarkdown escapeHtml={false} className="course-description" source={description} />
                </div>
            }
            
            <div className="description-block">
                <h2>What you will learn</h2>
                <ReactMarkdown escapeHtml={false} className="syllabus" source={syllabus} />
            </div>
            <div className="description-block">
                <h2>About {platform}</h2>
                <p>{about}</p>
            </div>
        </div>
    );
}

const CourseInfoDataBlock = (props) => {
    return (
        <div className="course-info">
            
            <div className="col col--left">
                <div className="title-header-block">
                    <h1>{props.title}</h1>
                    <p>{props.shortSummary}</p>
                </div>

                <div className="show-for-desktop">
                    <CourseDescription {...props}/>
                </div>
            </div>


            <div className="col col--right">
                <div className="icon-container">
                    <img className="course-image" src={props.image} alt="course image"/>
                </div>

                <div className="summary-details">
                    <h2>{props.price == 0 ? "Free" : props.price}</h2>
                    <a className="summary-details__link-to-course summary-details__item" href={props.urlToCourse} target="_blank">
                        <button className="button">
                            View course
                        </button>
                    </a>
                    <div className="summary-details__item">
                        <p className="bold">Platform:</p>
                        <p className="summary-details__item__data"> {props.platform}</p>
                    </div>
                    <div className="summary-details__item">
                        <p className="bold">Duration:</p>
                        <p className="summary-details__item__data"> {props.duration}</p>
                    </div>
                    {
                        !!props.difficulty && 
                        <div className="summary-details__item">
                            <p className="bold">Difficulty:</p>
                            <p className="summary-details__item__data">{props.difficulty}</p>
                        </div>
                    }
                    
                    {
                        !!props.partners &&
                        <div className="summary-details__item">
                            <p className="bold">Partners</p>
                            <p className="summary-details__item__data">{props.partners}</p>
                        </div>
                    }
                    
                    <div className="summary-details__item">
                        <p className="bold">Certificate:</p>
                        <p className="summary-details__item__data"> {props.hasCertificate ? "Yes" : "No"}</p>
                    </div>
                </div>

            </div>
            
            <div className="show-for-mobile col col--left">
                <CourseDescription {...props}/>
            </div>
        </div>
    );
};

export default CourseInfoDataBlock;

