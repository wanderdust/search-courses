import React from "react";
import {ReactTitle} from 'react-meta-tags';
import axios from "axios";
import CourseListItem from "./CourseListItem";

export class SearchResultsPage extends React.Component {
    state = {
        provider: "",
        courseList: [],
        coursesLength: undefined
    }

    componentDidMount () {
        this.handleGetProviderData();
    }

    handleGetProviderData () {
        const provider = () => {
            const providerName = this.props.match.params.provider;
            return providerName.split("_").join(" ");
        }

        const providerName = this.capitalizeFirstLetter(provider());

        this.setState(() => ({
            provider: providerName
        }));

        axios.get(`/api/courses/${providerName}`)
            .then((res) => {
                const coursesByProvider = res.data.coursesByProvider;

                this.setState(() => ({
                    courseList: coursesByProvider,
                    coursesLength: coursesByProvider.length
                }));
            });
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render () {
        return (
            <div>
                <ReactTitle title={`${this.state.provider} | CourseSearch`}/>
    
                <div className="provider-page-title">
                    <h1>Courses from {this.state.provider}</h1>
                    {!!this.state.coursesLength && <h3>{this.state.coursesLength} courses found</h3>}
                </div>
                <div>
                    {this.state.courseList.map((course) =>(
                        <CourseListItem key={course.id} course={course} isShortVersion={true}/>
                    ))}
                </div>
            </div>
        );
    }
};

export default SearchResultsPage;