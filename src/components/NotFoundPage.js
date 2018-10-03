import React from "react";
import { Link } from "react-router-dom";
import {ReactTitle} from 'react-meta-tags';

export const NotFoundPage = () => (
    <div className="failed-search-wrapper">
        <ReactTitle title="404 Page Not Found | CourseSearch"/>

        <div className="failed-search">
            <h1 className="failed-search__title--404">404</h1>
            <div className="failed-search__text--404">
                <div className="failed-search__text--404__text-top">
                    <p>This is embarrasing; this page does not exist...</p>
                </div>
                <div className="failed-search__text--404__text-bottom">
                    <p className="show-for-desktop">Let's return to the &#30;</p>
                    <Link to="/">
                        <h4>home page</h4>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default NotFoundPage;