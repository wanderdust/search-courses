/* 
* Header Component.
*/

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import CourseSearchHeader from "./CourseSearchHeader";
import DropdownForm from "./DropdownForm";
import { categories } from "../utils/categories";

const Header = (props) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/">
                        <h1>CourseSearch</h1>
                    </Link>
                    <DropdownForm {...props} categories={categories} dropdownTitle="categories"/>
                    <CourseSearchHeader {...props}/>
                </div>
            </div>
        </header>
    )
};

export default Header;