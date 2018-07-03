import React from "react";
import { connect } from "react-redux";

export class CourseListFilters extends React.Component {
    render () {
        return (
            <div>
                <select>
                    <option value="relevance">Relevance</option>
                </select>
            </div>
        );
    }
}

export default CourseListFilters;