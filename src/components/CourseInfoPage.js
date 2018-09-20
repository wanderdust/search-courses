import React from "react";
import axios from "axios";

export class CourseInfoPage extends React.Component {

    state = {
        title: "",
        image: "",
        description: ""
    }

    componentDidMount () {
        this.handleGetCourse();
    }

    handleGetCourse () {
        axios.get(`/api/course/${this.props.match.params.id}`)
            .then((res) => {
                const course = res.data.course;
                
                this.setState(() => ({
                    title: course.title,
                    image: course.image,
                    description: course.description
                }));
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    render () {
        return (
            <div>
               <h3>{this.state.title}</h3>
               <img src={this.state.image}/>
               <p>{this.state.description}</p>
            </div>
        );
    }
};

export default CourseInfoPage;

