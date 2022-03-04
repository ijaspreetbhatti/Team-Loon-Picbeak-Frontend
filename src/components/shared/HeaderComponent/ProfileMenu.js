import React, { useState } from "react";
import "./Header.scss";

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
                        <a href="*">Profile</a>
                        <a href="*">Log out</a>
                    </div>
            ) : null}
        </div>
    );
}