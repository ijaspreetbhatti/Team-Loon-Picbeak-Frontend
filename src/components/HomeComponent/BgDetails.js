import React from "react";

const BgDetails = (props) => {
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
            <img src="https://unsplash.com/photos/mOKHZYMhnQA" alt="magpie" />
            <h3>lorem ipsum</h3>
            <p>lorem</p>
        </div>
    );
};

export default BgDetails;

//rfce
