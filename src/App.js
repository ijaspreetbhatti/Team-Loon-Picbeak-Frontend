// import logo from './logo.svg';
import "./App.css";
// import Button from "./components/shared/ButtonComponent/Button";
// import BgDetails from "./components/HomeComponent/BgDetails";
// import BirdFilter from "./components/DiscoverComponent/BirdFilter";
import MatchView from "./components/Finder/MatchViewComponent/MatchView";
// import ListView from "./components/Finder/ListViewComponent/ListView";
import Header from "./components/shared/HeaderComponent/Header";
import FooterComponent from "./components/shared/FooterComponent/FooterComponent";

function App() {
    // const buttonCheckHandler = () => {
    //     alert("Working!!!!");
    // };

    return (
        <div className="App">
            <Header />
            <MatchView />
            <FooterComponent />
        </div>
    );
}
export default App;
