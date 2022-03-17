import React, { useState } from "react";
import Login from "../../LoginComponent/Login/Login";
import MessagePop from "../MessagePopComponent/MessagePop";
import "./Header.scss";
// import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu(props) {
    const [loginModal, setLoginModal] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false)

    const showLoginModal = () => {
        setLoginModal(true);
        props.setProfileMenu(false)
    }

    const showLogin = () => {
        localStorage.removeItem('userInfo')
        props.setProfileMenu(false)
    }

    const test = () => {
        setShowPopUp(false)
        console.log(showPopUp)
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
                    <button><a href="/profile">Profile</a></button>
                    {localStorage.getItem('userInfo') ? (<button onClick={() => showLogin()}>Log out</button>) : (<button onClick={showLoginModal}>Log in</button>)}
                </div>
            ) : null}
            <Login onClose={() => setLoginModal(false)} show={loginModal} setPopUp={test} />
            <MessagePop className={showPopUp ? "animation" : ""}>Account created! You are logged in now.</MessagePop>
        </div>
    );
}