import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    componentWillUpdate () {
        window.scrollTo(0, 0);
    }
    
    render () {
        return (
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="footer__links">
                        <div>
                            <h3>CourseSearch</h3>
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                            <Link to="/contact">
                                <p>Contact</p>
                            </Link>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <Link to="/search/1/?category=Programming&query=programming%java%javascript%python%developer%frontend%backend%app%android%node.js%node%react%vue%react.js%angular%git">
                                <p>Learn Programming</p>
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
                            <Link to="/search/1/?category=Machine%Learning&query=Machine%Learning%AI%artificial%intelligence%deep%learning">
                                <p>Learn Machine Learning</p>
                            </Link>
                            <Link to="/search/1/?category=Enterpreneurship&query=startup%enterpreneurship%enterpreneur%self%employed">
                                <p>Learn Enterpreneurship</p>
                            </Link>
                        </div>
                        <div>
                            <h3>Find online Courses from</h3>
                            <Link to="/provider/udacity">
                                <p>Udacity</p>
                            </Link>
                            <Link to="/provider/khan_academy">
                                <p>Khan Academy</p>
                            </Link>
                        </div>
                    </div>
                    <div className="footer__copyright">

                        <div>
                            <span>Copyright &#169; Coursesearch</span>
                        </div>
                        <div className="footer__copyright__privacy">

                            <div>
                                <Link to="/about/privacy-policies">Privacy Policy and Cookie Policy</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;
