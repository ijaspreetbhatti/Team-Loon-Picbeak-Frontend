// import logo from './logo.svg';
import "./App.css";
// import Button from "./components/shared/ButtonComponent/Button";
// import BgDetails from "./components/HomeComponent/BgDetails";
// import BirdFilter from "./components/DiscoverComponent/BirdFilter";
import MatchView from "./components/Finder/MatchViewComponent/MatchView";
// import ListView from "./components/Finder/ListViewComponent/ListView";
import Header from "./components/shared/HeaderComponent/Header";

function App() {
    // const buttonCheckHandler = () => {
    //     alert("Working!!!!");
    // };

    return (
        <div className="App">
            <Header />
            <MatchView />
        </div>
    );
}

// <Button className="primary" onClick={buttonCheckHandler}>
//     Identify bird
// </Button>

// <BgDetails></BgDetails>
// <BirdFilter></BirdFilter>
export default App;
