import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";
import MainMenu from "./MainMenu";
import ProfileMenu from "./ProfileMenu";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    const [showProfileMenu, setProfileMenu] = useState(false);
    const [showMainMenu, setMainMenu] = useState(false);
    const menuRef = useRef();
    const profileRef = useRef();

    useEffect(()=> {
        const clickedOutside = e => {
            if(showMainMenu && menuRef.current && !menuRef.current.contains(e.target)) {
                setMainMenu(false);
            } else if (showProfileMenu && profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileMenu(false);
            }
        }

        document.addEventListener("mousedown", clickedOutside);

        return () => {
            document.removeEventListener("mousedown", clickedOutside);
        }
    }, [showMainMenu, showProfileMenu])

    const handleProfileMenu = (event) => {
        event.preventDefault();

        if (showProfileMenu !== true) {
            setProfileMenu(true);
            setMainMenu(false);
        } else {
            setProfileMenu(false);
        }
    };

    const handleMainMenu = (event) => {
        event.preventDefault();

        if (showMainMenu !== true) {
            setMainMenu(true);
            setProfileMenu(false);
            
        } else {
            setMainMenu(false);
        }
    };

    const hideMain = (event) => {
        setMainMenu(false);
    };

    return (
        <div className="headerContainer">
            <a href="*">
                <div className="headerLeft">
                    <img
                        src="./assets/images/fullLogo.svg"
                        alt="picbeak logo"
                    ></img>
                </div>
            </a>
            <div className="headerRight">
                <div className="desktopNav">
                    <HashLink to="/*#BirdFilter">Identify Birds</HashLink>
                    <a href="/discover">Discover Birds</a>
                    <a href="/donate">Donate</a>
                </div>
                <MainMenu
                    handleMainMenu={handleMainMenu}
                    mainMenuDisplay={showMainMenu}
                    hideMenu={hideMain}
                    menuRef = {menuRef}
                />
                <ProfileMenu
                    handleProfileMenu={handleProfileMenu}
                    profileMenuDisplay={showProfileMenu}
                    setProfileMenu={setProfileMenu}
                    profileRef = {profileRef}
                />
            </div>
        </div>
    );
}
