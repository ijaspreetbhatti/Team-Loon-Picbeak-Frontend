import React from 'react'
import './Header.scss';

class Header extends React.Component {    
    render() {
    return (
        <div className="headerContainer">
            <div className="headerLeft"></div>
            <div className="headerRight">
                <div className="desktopNav">
                    <button>Identify Birds</button>
                    <button>Discover Birds</button>
                    <button>Donate</button>
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
                            <button id="homeBtn">Home</button>
                            <button>Identify Birds</button>
                            <button>Discover Birds</button>
                            <button>Donate</button>
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
                            <button>Profile</button>
                            <button>Log out</button>
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