import React from "react";
import MetaTags from 'react-meta-tags';


export const PrivacyPolies = (props) => {
    return (
        <div className="content-container privacy-policies">
            <MetaTags>
                <title>Privacy Policy | CourseSearch</title>
                <meta name="description" content="CourseSearch Privacy policies." />
            </MetaTags>
            
            <h1>Privacy Policy</h1>

            <div className="text-container">
                <h3 className="title">What information do we collect?</h3>
                <p>blah...</p>
            </div>
        </div>
    );
};

export default PrivacyPolies;