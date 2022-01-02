import React from "react";
import EditedDate from "./EditedDate";

export default function weatherInfo (props){
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
                      <img src="/images/icon-4.png" alt="{weatherData.description}" />
            <span className="unit">{Math.round(props.data.temperature)}°</span>C
                </div>
                <div className="col-6">
                   <ul>
                      <li>{props.data.description}</li>  
                      <li>Precipitation: 15%</li>
                      <li>Humidity: {props.data.humidity}</li>
                      <li>Wind: {props.data.wind}</li>
                   </ul>
                   
                </div>
              
            </div> 
        </div>
    );
}