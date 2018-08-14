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
            <div className="content-container content-container--header">
                <div className="header__content">
                    <Link className="header__title header-element" to="/">
                        <h1>CourseSearch</h1>
                    </Link>
                    <CourseSearchHeader {...props}/>
                    <DropdownForm {...props} categories={categories} dropdownTitle="categories"/>
                </div>
            </div>
        </header>
    )
};

export default Header;