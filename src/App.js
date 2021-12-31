
import './App.css';
import Weather from "./Weather.js"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather</h1>
      <Weather />
      <footer>
        This project was coded by Berlie and is <a href='https://github.com/Boakyewaa/react-weather-app'target="_blank" >open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
