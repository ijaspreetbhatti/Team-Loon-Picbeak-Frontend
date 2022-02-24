// import logo from './logo.svg';
import "./App.css";
// import Button from "./components/shared/ButtonComponent/Button";
import BgDetails from "./components/HomeComponent/BgDetails";
import Discover from "./components/DiscoverComponent/Discover";

function App() {
    // const buttonCheckHandler = () => {
    //     alert("Working!!!!");
    // };

    return (
        <div className="App">
            {/*<Button className="primary" onClick={buttonCheckHandler}>*/}
            {/*Identify bird*/}
            {/*</Button>*/}

            <BgDetails />
            <Discover></Discover>
        </div>
    );
}

export default App;
