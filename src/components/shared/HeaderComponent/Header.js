import React from "react";
import "./Header.scss";
import MainMenu from "./MainMenu";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
    return (
        <div className="headerContainer">
            <a href="*">
                <div className="headerLeft">
                    <img src="./assets/images/fullLogo.svg"></img>
                </div>
            </a>
            <div className="headerRight">
                <div className="desktopNav">
                    <a href="/">Identify Birds</a>
                    <a href="/discover">Discover Birds</a>
                    <a href="/donate">Donate</a>
                </div>
                <MainMenu />
                <ProfileMenu />
            </div>
        </div>
    );
}
