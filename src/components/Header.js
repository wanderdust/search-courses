import React from "react";
import { Link } from "react-router-dom";
import CourseSearchHeader from "./CourseSearchHeader";
import DropdownForm from "./DropdownForm";
import { categories } from "../utils/categories";

const Header = (props) => {
    return (
        <header className="header">
            <div className="content-container content-container--header">
                <div className="header__content">
                    <DropdownForm {...props} categories={categories} dropdownTitle="categories"/>
                    <Link className="header__title header-element" to="/">
                        <h1>CourseSearch</h1>
                    </Link>
                    <CourseSearchHeader {...props}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
