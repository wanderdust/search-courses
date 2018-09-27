import React from "react";
import { DataCard } from "./DataCard";

export const MainPageData = (props) => {
    return (
        <div className="data-cards">
           <DataCard
            image={"/../../images/icons/search-icon-outline.svg"}
            title={"Search"}
            description={"Search online courses from many different websites."}
            />
           <DataCard
            image={"/../../images/icons/visibility-icon.svg"}
            title={"Compare"}
            description={"Compare and find the right online course for you."}
           />
           <DataCard
            image={"/../../images/icons/academic-icon-outline.svg"}
            title={"Enroll"}
            description={"Develop your skills and become the professional you want to be."}
           />
        </div>
    );
};

export default MainPageData;