import React from "react";
import { connect } from "react-redux";
import { startSetCourses } from "../actions/courses";
import { topics } from "../utils/categories";

export class Categories extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            topics : topics
        }
    }

    handleOnClick = (e) => {
        const item = this.state.topics.find((topic)=> {
            return e.target.dataset.id === topic.id;
        });

        this.props.startSetCourses(item.tags);
        this.props.history.push(`/search/${item.purpose}`);
    }

    render () {
        return (
            <div className="dropdown">
               <div>Categories</div>
               <div className="dropdown__menu">
                    <ul onClick={this.handleOnClick}>
                        {this.state.topics.map((topic) => {
                            return <li key={topic.id} data-id={topic.id}>{topic.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startSetCourses: (textFilter) => dispatch(startSetCourses(textFilter))
});

export default connect(undefined, mapDispatchToProps)(Categories);

