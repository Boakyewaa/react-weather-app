import React from "react";
import WeatherIcon from "./WeatherIcon.js"
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

function handleResponse(response){
    console.log(response.data);
}
console.log(props);
    let apiKey= "1504ebb010471d47f96224deb5dd303e";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-6">
                    <div className="WeatherForecast-Day">
                        Sun
                      </div>  
                      <WeatherIcon code="50d" size="36" /> 
                      <div>
                       <span className="WeatherForecast-temp-max">
                        33°
                    </span>
                    <span className="WeatherForecast-temp-min">
                        30°
                    </span>   
                     </div> 
                    
                </div>
            </div>
        </div>
    );
}