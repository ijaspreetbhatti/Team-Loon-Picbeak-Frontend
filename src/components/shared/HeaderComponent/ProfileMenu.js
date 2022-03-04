import React, { useState } from "react";
import "./Header.scss";
import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu() {
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
        <div className="profileMenuContainer">
            <div
                onClick={changeMenu}
                className={
                    showMenu ? "active" : "profileLink"
                }
            ></div>
            {showMenu ? (
                <div className="profileMenu">
                        <a href="/profile">Profile</a>
                        <a href="*">Log out</a>
                    </div>
            ) : null}
        </div>
    );
}