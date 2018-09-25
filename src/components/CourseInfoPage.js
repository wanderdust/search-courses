import React from "react";
import axios from "axios";
import CourseInfoDataBlock from "../components/CourseInfoDataBlock";
import LoadingPage from "../components/LoadingPage";

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
        about: "",
        difficulty: "",
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
                    about: course.aboutPlatform,
                    difficulty: course.difficulty,
                    pageLoaded: true
                }));
            })
            .catch((err) => {
                this.props.history.push("/");
            })
    }
    
    render () {
        return (
            <div>
                {!this.state.pageLoaded ? <LoadingPage /> : <CourseInfoDataBlock {...this.state} />}
                
            </div>
        );
    }
};

export default CourseInfoPage;

