// import logo from './logo.svg';
import "./App.scss";
import Login from "./components/LoginComponent/Login/Login";
import { useEffect, useState } from "react";
import "./App.scss";
import MatchView from "./components/Finder/MatchViewComponent/MatchView";
import ListView from "./components/Finder/ListViewComponent/ListView";
import Header from "./components/shared/HeaderComponent/Header";
import FooterComponent from "./components/shared/FooterComponent/FooterComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import DonateComponent from "./components/DonateComponent/DonateComponent";
import DetailDataDisplay from "./components/DetailComponent/DetailDataDisplay/DetailDataDisplay";
import ProfileInformation from "./components/ProfileComponent/ProfileInformation"

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem("loggedIn");
        if (userInfo === "1") {
            setLoggedIn(true);
            alert("You have logged in, Welcome :)");
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("loggedIn", "1");
        setLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("loggedIn");
        setLoggedIn(false);
    };

    return (
        <div className="App">
            {/*{!loggedIn && <Login onLogin={loginHandler} />} *?}
            {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}
            <Header />

{/* 
            <div className="birdImg">
                <DetailDataDisplay
                birdPic={
                "https://3rvxro1qhiaouxf3h3et9bah-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/33709comox09Stellar.jpg"
                }
                ></DetailDataDisplay>
            </div> */}

            <Router>
                <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path="donate" element={<DonateComponent />} />
                    <Route path="match" element={<MatchView />} />
                    <Route path="*" element={<HomeComponent />} />
                    <Route path="listview" element={<ListView />} />
                    <Route path="profileInfo" element={<ProfileInformation />} />
                </Routes>
            </Router>
            {/* <Login></Login> */}
            {/* <FooterComponent /> */}
        </div>
    );
}
export default App;
