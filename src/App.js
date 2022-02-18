// import logo from './logo.svg';
import "./App.css";
import Login from "./components/LoginComponent/Login/Login";
import Button from "./components/shared/ButtonComponent/Button";
import DetailDataDisplay from "./components/DetailComponent/DetailDataDisplay/DetailDataDisplay";

function App() {
  const buttonCheckHandler = () => {
    alert("Working!!!!");
  };

  return (
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
