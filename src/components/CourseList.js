import React from "react";
import { connect } from "react-redux";
import CourseListItem from "./CourseListItem";
import currentPageCourses from "../selectors/currentPageCourses";
import sortBy from "../selectors/sortBy";

export class CourseList extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0, 0)
    }
    
    render () {
        return (
            <div>
                <div className="course-list">
                    {this.props.currentPageCourses.map((course) =>(
                        <CourseListItem key={course.id} course={course}/>
                    ))}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const sortedCourses = sortBy(state.courses.courseList, state.filters.sortBy);

    return {
        currentPageCourses: currentPageCourses(sortedCourses, state.filters.currentPage)
   }
};

export default connect(mapStateToProps)(CourseList);

