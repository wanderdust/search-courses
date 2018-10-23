import React from "react";
import MetaTags from 'react-meta-tags';
import PrivacyPolicyText from "./PrivacyPolicyText";


export const PrivacyPolies = (props) => {
    return (
        <div className="content-container privacy-policies">
            <MetaTags>
                <title>Privacy Policy | CourseSearch</title>
                <meta name="description" content="CourseSearch Privacy policies." />
            </MetaTags>
            
            <PrivacyPolicyText/>
        </div>
    );
};

export default PrivacyPolies;