import React, { useState } from "react";
import Login from "../../LoginComponent/Login/Login";
import "./Header.scss";
import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu() {
    const [showMenu, setMenu] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const changeMenu = (event) => {
        event.preventDefault();

        if (!showMenu) {
            setMenu(true);
        } else if (showMenu) {
            setMenu(false);
        }
    }

    const showLoginModal = () => {
        setLoginModal(true);
        setMenu(false);
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
                    <button>Profile</button>
                    <button onClick={showLoginModal}>Log in</button>
                </div>
            ) : null}
            <Login onClose={() => setLoginModal(false)} show={loginModal} />
        </div>
    );
}