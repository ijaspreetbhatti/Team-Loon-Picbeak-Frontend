import React from "react";
import "./Header.scss";

export default function MainMenu(props) {

    return (
        <div className="menuContainer">
            <div
                onClick={event => props.handleMainMenu(event)}
                className={
                    props.mainMenuDisplay ? "active-nav" : "navMenuIcon"
                }
            ></div>
            {props.mainMenuDisplay ? (
                <div
                    className="navMenu"
                >
                    <a href="*" id="homeBtn">
                        Home
                    </a>
                    <a href="/">Identify Birds</a>
                    <a href="/discover">Discover Birds</a>
                    <a href="/donate">Donate</a>
                </div>
            ) : null}
        </div>
    );
}