import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <div>
                    <h3>Course Search</h3>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/contact">
                        <p>Contact</p>
                    </Link>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <Link to="search/1/?category=Javascript&query=javascript%frontend%front-end%web-developer">
                        <p>Learn Javascript</p>
                    </Link>
                    <Link to="/search/1/?category=Python&query=python">
                        <p>Learn Python</p>
                    </Link>
                    <Link to="/search/1/?category=Marketing&query=marketing%analytics%product%seo%adwords%social%advertising%ad">
                        <p>Learn Marketing</p>
                    </Link>
                    <Link to="/search/1/?category=Design&query=css%scss%sass%typography%drawing%illustration%photoshop%UI%UX%palette">
                        <p>Learn Design</p>
                    </Link>
                    <Link to="/search/1/?category=query&query=Machine%Learning">
                        <p>Learn Machine Learning</p>
                    </Link>
                </div>
                <div>
                    <h3>Find online Courses from</h3>
                    <Link to="/">
                        <p>Udacity</p>
                    </Link>
                    <Link to="/">
                        <p>Khan Academy</p>
                    </Link>
                </div>
            </div>
            <div className="footer__copyright">
                <span>Copyright &#169; Coursesearch</span>
            </div>
        </footer>
    );
};

export default Footer;
