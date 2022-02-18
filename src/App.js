// import logo from './logo.svg';
import './App.css';
import Login from './components/LoginComponent/Login/Login';
import Button from './components/shared/ButtonComponent/Button';
import MatchView from './components/Finder/MatchViewComponent/MatchView';

function App() {
  const buttonCheckHandler = () => {
    alert('Working!!!!');
  }

  return (
    <MatchView />
    // <div className="App">
    //   <div className="App">
    //     <Button className="primary" onClick={buttonCheckHandler}>Identify bird</Button>
    //   </div>
    // </div>
  );
}

export default App;