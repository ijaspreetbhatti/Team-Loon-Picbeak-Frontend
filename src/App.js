// import logo from './logo.svg';
import './App.css';
import Button from './components/shared/ButtonComponent/Button';

function App() {
  const buttonCheckHandler = () => {
    alert('Working!!!!');
  }

  return (
    <div className="App">
      <Button onClick={buttonCheckHandler}>Click Me</Button>
    </div>
  );
}

export default App;
