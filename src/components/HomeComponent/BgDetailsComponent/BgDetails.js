import React from "react";
import Block from "./BlockComponent/Block";
import Donate from "./DonateComponent/Donate";
import Population from "./PopulationComponent/Population";
import "./BgDetails.scss";

const BgDetails = (props) => {
    return (
        <div className="bgDetails">
            <h2 className="bgHeader">
                Why we need birds to support a healthy environment
            </h2>
            <Block />
            <Population />
            <Donate />
        </div>
    );
};

export default BgDetails;

//rfce
