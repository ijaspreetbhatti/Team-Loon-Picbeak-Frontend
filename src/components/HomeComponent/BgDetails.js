import React from "react";
import Block from "./Block";
import Donate from "./Donate";
import Population from "./Population";
import "./HomeScss/BgDetails.scss";

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
