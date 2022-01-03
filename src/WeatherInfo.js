import React from "react";
import EditedDate from "./EditedDate";

export default function WeatherInfo (props){
    return(
        <div className="weatherInfo">
           <h2> {props.data.city} </h2>
            <ul className="weather-description">
                <li><strong>CURRENT WEATHER</strong></li>
                <li>
                    < EditedDate date={props.data.date} /> 
                    </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={props.data.icon} alt={props.data.description}/>
            <span className="unit">{Math.round(props.data.temperature)}°</span>C
                </div>
                <div className="col-6">
                   <ul>
                      <li className="text-capitalize">{props.data.description}</li>  
                      <li>Humidity: {props.data.humidity}%</li>
                      <li>Wind: {props.data.wind} Km/hr</li>
                   </ul>
                   
                </div>
              
            </div> 
        </div>
    );
}