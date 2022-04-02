import React from "react";
import Button from "../../../shared/ButtonComponent/Button";
import "./Donate.scss";
import DonateImg from "../../HomeImg/donate.png";
import VectorLarge from "../../HomeImg/donateVectorLarge.png";

function Donate(props) {
    return (
        <div className="Donate">
            <div className="imgContainer">
                <img className="front" src={DonateImg} alt="donate block" />
                <img
                    className="bottom"
                    src={VectorLarge}
                    alt="line behind birds"
                />
            </div>
            <div className="donate-desc">
                <h2>How you can help conserve birds</h2>
                <p>
                    By considering a gift for the birds and donating to bird
                    conservation organizations, you are giving back to
                    every living thing - including us!
                </p>
                <div className="buttonParent">
                    <a href="/donate">
                        <Button className="primary">Donate</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Donate;
