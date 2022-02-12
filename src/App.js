// import logo from './logo.svg';
import './App.css';
import Login from './components/LoginComponent/Login';
import Button from './components/shared/ButtonComponent/Button';

function App() {
  const buttonCheckHandler = () => {
    alert('Working!!!!');
  }

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
