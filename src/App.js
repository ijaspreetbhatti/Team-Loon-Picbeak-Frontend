import "./App.scss";
import MatchView from "./components/Finder/MatchViewComponent/MatchView";
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
                </Routes>
            </Router>

            <FooterComponent />
        </div>
    );
}
export default App;
