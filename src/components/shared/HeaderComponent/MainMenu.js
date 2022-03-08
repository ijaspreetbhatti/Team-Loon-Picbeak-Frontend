import React, { useState } from "react";
import "./Header.scss";

export default function MainMenu() {
    const [showMenu, setMenu] = useState(false);

    const changeMenu = (event) => {
        event.preventDefault();

        if (!showMenu) {
            setMenu(true);
        } else if(showMenu) {
            setMenu(false);
        }
    }

    return (
        <div className="menuContainer">
            <div
                onClick={changeMenu}
                className={
                    showMenu ? "active-nav" : "navMenuIcon"
                }
            ></div>
            {showMenu ? (
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
