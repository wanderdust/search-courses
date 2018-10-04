import React from "react";
import { Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';

export const NotFoundPage = () => (
    <div className="failed-search-wrapper">
        <MetaTags>
            <title>Page not found | CourseSearch</title>
            <meta name="description" content="404 this page does not exist" />
            <meta property="og:title" content="Page not found | CourseSearch" />
            <meta property="og:url" content="https://www.coursesearch.net"/>
            <meta name="twitter:title" content="Page not found | CourseSearch"/>
        </MetaTags>

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