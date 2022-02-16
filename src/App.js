// import logo from './logo.svg';
import "./App.css";
import Button from "./components/shared/ButtonComponent/Button";

import BgDetails from "./components/HomeComponent/BgDetails";

import BirdFilter from "./components/DiscoverComponent/BirdFilter";

function App() {
    const buttonCheckHandler = () => {
        alert("Working!!!!");
    };

    return (
        <div className="App">
            <Button className="primary" onClick={buttonCheckHandler}>
                Identify bird
            </Button>

            <BgDetails></BgDetails>
            <BirdFilter></BirdFilter>
        </div>
    );
}

export default App;
