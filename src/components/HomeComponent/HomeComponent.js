import React from "react";
import "./HomeComponent.scss";
import Button from "../shared/ButtonComponent/Button";
import BgDetails from "./BgDetailsComponent/BgDetails";
import BirdFilter from "./BirdFilter";
import FooterComponent from "../shared/FooterComponent/FooterComponent";

function HomeComponent(props) {
    const buttonCheckHandler = () => {
        document.getElementById("BirdFilter").scrollIntoView();
    };

    return (
        <div className="home">
            <div
                className="bannerContainer"
                style={{
                    backgroundImage: "url(../assets/images/bannerWave.svg)",
                }}
            >
                <div>
                    <h1>Raising awareness, one bird at a time!</h1>
                    <p>
                        Identify birds and collect them in your Beakpedia to
                        help protect the birds of British Columbia.
                    </p>
                    <Button className="primary" onClick={buttonCheckHandler}>
                        Identify a bird
                    </Button>
                </div>
                <img src="./assets/images/banner.svg" alt="Bird" />
            </div>
            <BirdFilter></BirdFilter>
            <BgDetails></BgDetails>
            <FooterComponent/>
        </div>
    );
}

export default HomeComponent;
