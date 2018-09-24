import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

//Re-usable component with the syllabus and description of the course.
const CourseDescription = ({description, syllabus, platform}) => {
    return (
        <div>
            <h3>About this course</h3>
            <ReactMarkdown escapeHtml={false} source={description} />
            <h3>What you will learn:</h3>
            <ReactMarkdown escapeHtml={false} source={syllabus} />
            <h3>About {platform}</h3>
        </div>
    );
}

export class CourseInfoPage extends React.Component {

    state = {
        title: "",
        image: "",
        shortSummary: "",
        description: "",
        syllabus: "",
        urlToCourse: "",
        price: "",
        duration: "",
        platform: "",
        pageLoaded: false
    }

    componentDidMount () {
        this.handleGetCourse();
    }

    handleGetCourse () {
        axios.get(`/api/course/${this.props.match.params.id}`)
            .then((res) => {
                if (res.data.course === null) {
                    this.props.history.push("/");
                }
                const course = res.data.course;
  
                this.setState(() => ({
                    title: course.title,
                    image: course.image,
                    shortSummary: course.shortSummary,
                    description: course.fullDescription,
                    syllabus: course.syllabus,
                    urlToCourse: course.urlToCourse,
                    price: course.price,
                    duration: course.duration,
                    platform: course.platform,
                    pageLoaded: true
                }));
            })
            .catch((err) => {
                this.props.history.push("/");
            })
    }
    
    render () {
        return (
            <div className="course-info">
                
                <div className="col col--left">
                    <h3>{this.state.title}</h3>
                    <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                    <p>{this.state.shortSummary}</p>

                    <div className="show-for-desktop">
                        <CourseDescription {...this.state}/>
                    </div>
                </div>

                <div className="col col--right">
                    <div className="icon-container">
                        <img className="course-image" src={this.state.image} alt="course image"/>
                    </div>
                    <div className="summary-details">
                        <h2>{this.state.price == 0 ? "Free" : this.state.price}</h2>
                        <a className="summary-details__link-to-course summary-details__item" href={this.state.urlToCourse} target="_blank">
                            <button className="button">
                                View course
                            </button>
                        </a>
                        <div className="summary-details__item">
                            <p><span className="bold">Platform:</span> {this.state.platform}</p>
                        </div>
                        <div className="summary-details__item">
                            <p><span className="bold">Duration:</span> {this.state.duration}</p>
                        </div>
                        {
                            !!this.state.partners &&
                            <div className="summary-details__item">
                                <p><span className="bold">Partners</span></p>
                            </div>
                        }
                        
                        <div className="summary-details__item">
                            <p>
                                <span className="bold">Certificate: </span> {this.hasCertificate ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="show-for-mobile col col--left">
                    <CourseDescription {...this.state}/>
                </div>
            </div>
        );
    }
};

export default CourseInfoPage;

