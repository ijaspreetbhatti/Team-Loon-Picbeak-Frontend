import React, { useState, useEffect } from "react";
import Login from "../../LoginComponent/Login/Login";
import MessagePop from "../MessagePopComponent/MessagePop";
import "./Header.scss";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import ProfileInformation from '../../ProfileComponent/ProfileInformation';
// import ProfileInformation from "../../ProfileComponent/ProfileInformation";

export default function ProfileMenu(props) {
    const [loginModal, setLoginModal] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);


    const showLoginModal = () => {
        setLoginModal(true);
        props.setProfileMenu(false)
    }

    const showLogin = () => {
        localStorage.removeItem('userInfo')
        props.setProfileMenu(false)
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
                    
                    
                    {localStorage.getItem('userInfo') ? (<button><a href="/profile">Profile</a></button>) : ""}
                    {localStorage.getItem('userInfo') ? (<button onClick={() => showLogin()}>Log out</button>) : (<button onClick={showLoginModal}>Log in</button>)}
                </div>
            ) : null}
            <Login onClose={() => setLoginModal(false)} show={loginModal} setShowPopUp={() => setShowPopUp(true)} />
            <MessagePop showPopUp={showPopUp}>Account created! You are logged in now.</MessagePop>
        </div>
    );
}