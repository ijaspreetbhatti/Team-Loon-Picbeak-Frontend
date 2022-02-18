// import logo from './logo.svg';
import "./App.css";
import Button from "./components/shared/ButtonComponent/Button";

import BgDetails from "./components/HomeComponent/BgDetails";

import BirdFilter from "./components/DiscoverComponent/BirdFilter";

import DetailDataDisplay from "./components/DetailComponent/DetailDataDisplay/DetailDataDisplay";

function App() {
  const buttonCheckHandler = () => {
    alert("Working!!!!");
  };

  return (
    // <div className="App">
    //   <Button className="primary" onClick={buttonCheckHandler}>
    //     Identify bird
    //   </Button>

    //   <BgDetails></BgDetails>
    //   <BirdFilter></BirdFilter>
    // </div>

    <div className="birdImg">
      <DetailDataDisplay
        birdPic={
          "https://3rvxro1qhiaouxf3h3et9bah-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/33709comox09Stellar.jpg"
        }
      ></DetailDataDisplay>
    </div>
  );
}

export default App;
