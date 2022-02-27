// import logo from './logo.svg';
import "./App.scss";
import Button from "./components/shared/ButtonComponent/Button";

import BgDetails from "./components/HomeComponent/BgDetails";

import BirdFilter from "./components/DiscoverComponent/BirdFilter";
import Card from "./components/shared/DialogComponent/Card";
import Login from "./components/LoginComponent/Login/Login";
import { useEffect, useState } from "react";
import Signup from "./components/LoginComponent/CreateAccount/Signup";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem('loggedIn');
        if (userInfo === '1') {
            setLoggedIn(true);
            alert('You have logged in, Welcome :)');
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('loggedIn', '1')
        setLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('loggedIn')
        setLoggedIn(false);
    };

    return (
        <div className="App">
            {/*{!loggedIn && <Login onLogin={loginHandler} />} *?}
            {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}

            <Login></Login>
        </div>
    );
}

export default App;