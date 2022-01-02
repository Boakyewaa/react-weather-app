import React, { useState } from "react";
import axios from "axios"
import './Weather.css';

export default function Weather(props){
    const {ready, setReady} = useState(false);
    const {weatherData, setWeatherData} = useState({});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: "Friday 3:40pm",
            
        });

        setReady(true);
    }
    
    if (ready) {
        return(
        <div className="Main-weather">
            <form className="search-button">
                 <input type="text" placeholder="Search for a location" className="search-input"/>
            <input type="button" className="btn btn-primary" value="Search"/>
            </form>
           <div className="Weather">
               <h2> {weatherData.city} </h2>
            <ul className="weather-description">
                <li><strong>CURRENT WEATHER</strong></li>
                <li>{weatherData.date}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                      <img src="/images/icon-4.png" alt="{weatherData.description}" />
            <span className="unit">{Math.round(weatherData.temperature)}°</span>C
                </div>
                <div className="col-6">
                   <ul>
                      <li>{weatherData.description}</li>  
                      <li>Precipitation: 15%</li>
                      <li>Humidity: {weatherData.humidity}</li>
                      <li>Wind: {weatherData.wind}</li>
                   </ul>
                   
                </div>
              
            </div>
           </div>
            
             
        </div>
    );
    } else{
        const apiKey = "1504ebb010471d47f96224deb5dd303e";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        
    axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
    
}