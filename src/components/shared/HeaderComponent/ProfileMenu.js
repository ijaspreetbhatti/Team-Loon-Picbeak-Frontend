import React, { useState } from "react";
import Login from "../../LoginComponent/Login/Login";
import "./Header.scss";
// import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu(props) {
    const [loginModal, setLoginModal] = useState(false);

    const showLoginModal = () => {
        setLoginModal(true);
        // setMenu(false);
    }

    return (
        <div className="profileMenuContainer">
            <div
                onClick={event => props.handleProfileMenu(event)}
                className={
                    props.profileMenuDisplay ? "active" : "profileLink"
                }
            ></div>
            {props.profileMenuDisplay ? (
                <div className="profileMenu">
                    <button>Profile</button>
                    <button onClick={showLoginModal}>Log in</button>
                </div>
            ) : null}
            <Login onClose={() => setLoginModal(false)} show={loginModal} />
        </div>
    );
}