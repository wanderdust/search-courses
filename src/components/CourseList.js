import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import CourseListItem from "./CourseListItem";
import currentPageCourses from "../selectors/currentPageCourses";
import sortBy from "../selectors/sortBy";
import { startSetCourses } from "../actions/courses";
import { setCurrentCategory, setCurrentPage } from "../actions/filters";


export class CourseList extends React.Component {
    componentDidMount () {
        const currentPage = + this.props.match.params.page;

        this.handleGetData();
        this.props.setCurrentPage(currentPage);

        this.props.history.listen((location) => {
            this.handleGetData(location.search);
        });
    }

    componentWillUpdate () {
        window.scrollTo(0, 0);
    }

    handleGetData (parameters = this.props.location.search) {
        const parsed = queryString.parse(parameters);
        
        if (!!parsed.query) {
            const category = parsed.category;
            const search = parsed.query.split("%").join(" ");

            this.props.startSetCourses(search);
            this.props.setCurrentCategory(category);
        }
    }
    
    render () {
        return (
            <div>
                <div className="course-list">
                
                    {this.props.currentPageCourses.map((course) =>(
                        <CourseListItem key={course.id} course={course} isShortVersion={false}/>
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

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter)),
    setCurrentCategory: (category) => dispatch(setCurrentCategory(category)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

