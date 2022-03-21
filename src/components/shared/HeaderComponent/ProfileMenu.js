import React, { useState } from "react";
import Login from "../../LoginComponent/Login/Login";
import MessagePop from "../MessagePopComponent/MessagePop";
import "./Header.scss";
// import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu(props) {
    const [loginModal, setLoginModal] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [loginPopUp, setLoginPopUp] = useState(false);

    const signinPopUpHandler = () => {
        setShowPopUp(true)
    }
    const loginPopUpHandler = () => {
        setLoginPopUp(true)
    }

    const showLoginModal = () => {
        setLoginModal(true);
        props.setProfileMenu(false)
    }

    const showLogin = () => {
        localStorage.removeItem('userInfo')
        props.setProfileMenu(false)
        setLoginPopUp(false);
        setShowPopUp(false);
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
                <div className={localStorage.getItem('userInfo') ? "profileMenu" : "profileMenu2"}>
                    {localStorage.getItem('userInfo') ? (<button><a href="/profile">Profile</a></button>) : (null)}
                    {localStorage.getItem('userInfo') ? (<button onClick={() => showLogin()}>Log out</button>) : (<button onClick={showLoginModal}>Log in</button>)}
                </div>
            ) : null}
            <Login onClose={() => setLoginModal(false)} show={loginModal} setShowPopUp={signinPopUpHandler} setLoginPopUp={loginPopUpHandler} />
            {showPopUp ? (<MessagePop showPopUp={showPopUp}>Account created! You are logged in now.</MessagePop>) : (null)}
            {loginPopUp ? (<MessagePop showPopUp={loginPopUp}>You are logged in now.</MessagePop>) : (null)}
        </div>
    );
}