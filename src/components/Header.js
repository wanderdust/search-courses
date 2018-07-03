import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import CourseSearchHeader from "./CourseSearchHeader";
import Categories from "./Categories";

const Header = (props) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/">
                        <h1>CourseSearch</h1>
                    </Link>
                    <Categories {...props}/>
                    <CourseSearchHeader {...props}/>
                </div>
            </div>
        </header>
    )
};

export default Header;