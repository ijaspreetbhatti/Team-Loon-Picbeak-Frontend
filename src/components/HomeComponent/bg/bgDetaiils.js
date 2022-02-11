import React from "react";

const bgDetails = (props) => {
    return (
        <div>
            <p>Why we need birds to support a healthy environment</p>
            {Block}
            {Block}
            {Block}
        </div>
    );
};

const Block = (props) => {
    return (
        <div className="block">
            <img></img>
            <h3>lorem ipsum</h3>
            <p>lorem</p>
        </div>
    );
};

export default bgDetails;
