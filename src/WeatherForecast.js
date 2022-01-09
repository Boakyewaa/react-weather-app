import React from "react";
import WeatherIcon from "./WeatherIcon.js"
import "./WeatherForecast.css";

export default function WeatherForecast(){
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