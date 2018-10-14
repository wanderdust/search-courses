import React from "react";
import MetaTags from 'react-meta-tags';
import axios from "axios";
import CourseListItem from "./CourseListItem";
import LoadingPage from "./LoadingPage";

export class SearchResultsPage extends React.Component {
    state = {
        provider: "",
        courseList: [],
        coursesLength: undefined,
        courseListFetched: false
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
                    coursesLength: coursesByProvider.length,
                    courseListFetched: true
                }));
            });
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render () {
        return (
            <div>
                <MetaTags>
                    <title>{this.state.coursesLength} Online Courses from {this.state.provider} | CourseSearch</title>
                    <meta name="description" content={`Find the best ${this.state.provider} courses from this list`} />
                    <meta property="og:title" content={`Online Courses from ${this.state.provider} | CourseSearch`} />
                    <meta property="og:url" content={`https://www.coursesearch.net/provider/${this.state.provider}`}/>
                    <meta name="twitter:title" content={`Online Courses from ${this.state.provider} | CourseSearch`}/>
                </MetaTags>
    
                <div className="provider-page__title">
                    <h1>Courses from {this.state.provider}</h1>
                    {!!this.state.coursesLength && <h3>{this.state.coursesLength} courses found</h3>}
                </div>
                {!this.state.courseListFetched && <LoadingPage /> }
                <div className="provider-page__course-list">
                    {this.state.courseList.map((course) =>(
                        <CourseListItem key={course.id} course={course} isShortVersion={true}/>
                    ))}
                </div>
            </div>
        );
    }
};

export default SearchResultsPage;