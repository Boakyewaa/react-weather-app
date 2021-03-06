
import './App.css';
import Weather from "./Weather.js"


export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather</h1>
      <Weather defaultCity=" Accra"/>
      <footer>
        This project was coded by Berlie and is <a href='https://github.com/Boakyewaa/react-weather-app' target="_blank" rel='noreferrer' >open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

