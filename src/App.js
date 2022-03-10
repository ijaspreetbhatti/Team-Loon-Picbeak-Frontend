// import logo from './logo.svg';
import "./App.scss";
import Login from "./components/LoginComponent/Login/Login";
import "./App.scss";
import MatchView from "./components/Finder/MatchViewComponent/MatchView";
import ListView from "./components/Finder/ListViewComponent/ListView";
import Header from "./components/shared/HeaderComponent/Header";
import FooterComponent from "./components/shared/FooterComponent/FooterComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import DonateComponent from "./components/DonateComponent/DonateComponent";
import Discover from "./components/DiscoverComponent/Discover";
import DetailDataDisplay from "./components/DetailComponent/DetailDataDisplay/DetailDataDisplay";
import ProfileInformation from "./components/ProfileComponent/ProfileInformation";

function App() {
    return (
        <div className="App">
            <Router>
            <Header />
                <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path="donate" element={<DonateComponent />} />
                    <Route path="match" element={<MatchView />} />
                    <Route path="*" element={<HomeComponent />} />
                    <Route path="listview" element={<ListView />} />
                    <Route path="discover" element={<Discover />} />
                    <Route path="profile" element={<ProfileInformation />} />
                    <Route path="details" element={<DetailDataDisplay/>}/>
                    <Route path="home/birdfilter" element={<HomeComponent />}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;
