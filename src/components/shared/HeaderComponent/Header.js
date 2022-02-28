import React from 'react'
import './Header.scss';

class Header extends React.Component {    
    render() {
    return (
        <div className="headerContainer">
            <a href="*"><div className="headerLeft">
                <img src="./assets/images/fullLogo.svg"></img>
            </div></a>
            <div className="headerRight">
                <div className="desktopNav">
                    <a href="/match">Identify Birds</a>
                    <a href="*">Discover Birds</a>
                    <a href="/donate">Donate</a>
                </div>
                <Menu/>
                <ProfileMenu/>
            </div>
        </div>
        )
    }
}

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        // this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        if(!this.state.showMenu) {
            this.setState({showMenu: true});
        } else {
            this.setState({showMenu: false});
        }
    }
    

    render() {
    return (
            <div className="menuContainer">
                <div onClick={this.showMenu}className="navMenuIcon"></div>
                {
                    this.state.showMenu ? (
                        <div className="navMenu" ref={(element)=>{this.dropdownMenu = element;}}>
                            <a href="*" id="homeBtn">Home</a>
                            <a href='/match'>Identify Birds</a>
                            <a href="*">Discover Birds</a>
                            <a href="/donate">Donate</a>
                        </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        )
    }
}

class ProfileMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        // this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        if(!this.state.showMenu) {
            this.setState({showMenu: true});
        } else {
            this.setState({showMenu: false});
        }
    }
    

    render() {
    return (
            <div className="profileMenuContainer">
                <div onClick={this.showMenu}className="profileLink"></div>
                {
                    this.state.showMenu ? (
                        <div className="profileMenu" ref={(element)=>{this.dropdownMenu = element;}}>
                            <a href="*">Profile</a>
                            <a href="*">Log out</a>
                        </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        )
    }
}

export default Header;