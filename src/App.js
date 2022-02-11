// import logo from './logo.svg';
import './App.css';
import Button from './components/shared/ButtonComponent/Button';

function App() {
  const buttonCheckHandler = () => {
    alert('Working!!!!');
  }

  return (
    <div className="App">
      <Button className="primary" onClick={buttonCheckHandler}>Identify bird</Button>
    </div>
  );
}

export default App;
