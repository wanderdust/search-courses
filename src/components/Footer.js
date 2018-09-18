import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/contact">
                    <p>Contact</p>
                </Link>
                <Link to="/">
                    <p>Privacy policy</p>
                </Link>
            </div>
            <div className="footer__copyright">
                <span>Copyright &#169; Coursesearch</span>
            </div>
        </footer>
    );
};

export default Footer;
