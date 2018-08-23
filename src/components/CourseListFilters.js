import React from "react";
import { connect } from "react-redux";
import { sortByRelevance, sortByCheapest, sortByExpensive } from "./../actions/filters";

export class CourseListFilters extends React.Component {
    onSortChange = (e) => {
        if (e.target.value ===  "relevance") {
            this.props.sortByRelevance();
        } else if (e.target.value === "cheapest_first") {
            this.props.sortByCheapest();
        } else if (e.target.value === "expensive_first") {
            this.props.sortByExpensive();
        }
    }

    render () {
        return (
            <div>
                <select
                    className="select"
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="relevance">Relevance</option>
                    <option value="cheapest_first">Cheapest first</option>
                    <option value="expensive_first">Most expensive first</option>
                </select>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    sortByRelevance: () => dispatch(sortByRelevance()),
    sortByCheapest: () => dispatch(sortByCheapest()),
    sortByExpensive: () => dispatch(sortByExpensive())
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseListFilters);