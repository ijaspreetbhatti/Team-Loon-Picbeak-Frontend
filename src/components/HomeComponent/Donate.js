import React from "react";
import Button from "../shared/ButtonComponent/Button";
import "./HomeScss/Donate.scss";
import DonateImg from "./HomeImg/donate.png";
import Vector from "./HomeImg/donateVector.png";

function Donate(props) {
<<<<<<< HEAD
  return (
    <div className="Donate">
      <img src="./img/donate.png" alt="donate block" />
      <h2>How you can help to conserve birds</h2>
      <p>
        By considering a gift for the birds by donating to birds conservation
        organizations, you are also getting back to every living thing including
        us!
      </p>
      <div class="buttonParent">
        <Button className="primary">Donate</Button>
      </div>
    </div>
  );
=======
    return (
        <div className="Donate">
            <div className="imgContainer">
                <img className="front" src={DonateImg} alt="donate block" />
                <img className="bottom" src={Vector} alt="line behind birds" />
            </div>

            <h2>How you can help to conserve birds</h2>
            <p>
                By considering a gift for the birds by donating to birds
                conservation organizations, you are also getting back to every
                living thing including us!
            </p>
            <div className="buttonParent">
                <Button className="primary">Donate</Button>
            </div>
        </div>
    );
>>>>>>> develop
}

export default Donate;
