import React from "react";
import Button from "../shared/ButtonComponent/Button";

function Donate() {
    return (
        <div>
            <img src="https://via.placeholder.com/120x181" alt="donate block" />
            <h3>How you can help to conserve birds</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
            </p>
            <Button className="primary">Donate</Button>
        </div>
    );
}

export default Donate;
