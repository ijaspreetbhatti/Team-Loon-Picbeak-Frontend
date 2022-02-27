import React from "react";
import Button from "../shared/ButtonComponent/Button";
import "./DonateComponent.scss";

function DonateComponent(props) {
    const itemsArray = [
        <DonateItem
            data={{
                name: "Birds Canada",
                info: "Together we are taking action for birds.",
                link: "https://www.duck.com/",
                image: "https://source.unsplash.com/wTPp323zAEw",
            }}
            key={0}
        ></DonateItem>,
        <DonateItem
            data={{
                name: "Reifel Bird Sanctuary",
                info: "Contribute to research and conservation.",
                link: "https://www.duck.com/",
                image: "https://source.unsplash.com/S8onLkFuZHY",
            }}
            key={1}
        ></DonateItem>,
    ];
    return (
        <div className="donatePage">
            <div className="donateMessageContainer">
                <h1>
                    Help make a difference by donating to these organizations
                </h1>
                <p>
                    By considering a gift for the birds and donating to bird
                    conservation organizations, you are also giving back!
                </p>
                <div className="donateItems">{itemsArray}</div>
            </div>
        </div>
    );
}

function DonateItem(props) {
    return (
        <div
            className="donateItem"
            style={{ backgroundImage: "url(" + props.data.image + ")" }}
        >
            <p>{props.data.name}</p>
            <h2>{props.data.info}</h2>
            <div style={{ flexGrow: 1 }}></div>
            <Button className="primary donateButton">Donate</Button>
        </div>
    );
}

export default DonateComponent;
