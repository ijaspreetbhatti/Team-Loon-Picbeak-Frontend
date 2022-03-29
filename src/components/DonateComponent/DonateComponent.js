import React from "react";
import Button from "../shared/ButtonComponent/Button";
import "./DonateComponent.scss";

function DonateComponent(props) {
    const itemsArray = [
        <DonateItem
            data={{
                name: "Birds Canada / Oiseaux Canada",
                info: "Together, we are Canada’s voice for birds!",
                link: "https://conserve.birdscanada.org/page/50719/donate/1",
                image: "https://nature-watch.com/blog/wp-content/uploads/2019/03/Bird-Watching-Blog-Image-1230x692.jpg",
            }}
            key={0}
        ></DonateItem>,
        <DonateItem
            data={{
                name: "Reifel Bird Sanctuary",
                info: "Contribute to research and conservation.",
                link: "https://www.reifelbirdsanctuary.com/index.html",
                image: "https://www.collinsdictionary.com/images/full/birdsanctuary_431316910_1000.jpg",
            }}
            key={1}
        ></DonateItem>,
    ];
    return (
        <div className="donatePage">
            <div className="donateMessageContainer">
                <h2>
                    Help make a difference by donating to these organizations
                </h2>
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
    const handleClick = (link) => {
        window.location.href = link;
    };
    return (
        <div
            className="donateItem"
            style={{ backgroundImage: "url(" + props.data.image + ")" }}
        >
            <p>{props.data.name}</p>
            <h2>{props.data.info}</h2>
            <div style={{ flexGrow: 1 }}></div>
            <Button
                onClick={() => handleClick(props.data.link)}
                className="primary donateButton"
            >
                Donate
            </Button>
        </div>
    );
}

export default DonateComponent;
