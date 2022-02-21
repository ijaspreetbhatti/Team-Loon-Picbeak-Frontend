import React from "react";
import Button from "../shared/ButtonComponent/Button";
import "./Donate.scss";

function Donate(props) {
    return (
        <div className="Donate">
            <img src="./img/donate.png" alt="donate block" />
            <h2>How you can help to conserve birds</h2>
            <p>
                By considering a gift for the birds by donating to birds
                conservation organizations, you are also getting back to every
                living thing including us!
            </p>
            <div class="buttonParent">
                <Button className="primary">Donate</Button>
            </div>
        </div>
    );
}

export default Donate;
