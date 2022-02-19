import React from 'react'
import './Header.scss';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft"></div>
            <div className="headerRight">
                <a href="#"><div className="navMenu"></div></a>
                <nav className="desktopNav"> 
                    <ul>
                        <li>Identify Birds</li>
                        <li>Discover Birds</li>
                        <li>Donate</li>
                    </ul>
                </nav>
                <a href="#"><div className="profileLink"></div></a>
            </div>
        </div>
    )
}

export default Header;