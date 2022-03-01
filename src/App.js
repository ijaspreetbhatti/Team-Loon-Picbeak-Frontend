// import logo from './logo.svg';
import "./App.scss";
import Login from "./components/LoginComponent/Login/Login";
import "./App.scss";
import MatchView from "./components/Finder/MatchViewComponent/MatchView";
import ListView from "./components/Finder/ListViewComponent/ListView";
import Header from "./components/shared/HeaderComponent/Header";
import FooterComponent from "./components/shared/FooterComponent/FooterComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import DonateComponent from "./components/DonateComponent/DonateComponent";

function App() {

    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path="donate" element={<DonateComponent />} />
                    <Route path="match" element={<MatchView />} />
                    <Route path="*" element={<HomeComponent />} />
                    <Route path="listview" element={<ListView />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </Router>
            {/* <Login></Login> */}
            <FooterComponent />
        </div>
    );
}
export default App;
