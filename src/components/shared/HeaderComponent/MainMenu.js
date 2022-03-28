import React from "react";
import "./Header.scss";
import { HashLink } from 'react-router-hash-link';


export default function MainMenu(props) {

    const menuRef = props.menuRef;

    return (
        <div className="menuContainer" ref={menuRef}>
            <div
                onClick={event => props.handleMainMenu(event)}
                className={
                    props.mainMenuDisplay ? "active-nav" : "navMenuIcon"
                }
            ></div>
            {props.mainMenuDisplay ? (
                <div
                    className="navMenu"
                >
                    <a href="*" id="homeBtn">
                        Home
                    </a>
                    <HashLink to="/*#BirdFilter" onClick={props.hideMenu}>Identify Birds</HashLink>
                    <a href="/discover">Discover Birds</a>
                    <a href="/donate">Donate</a>
                </div>
            ) : null}
        </div>
    );
}