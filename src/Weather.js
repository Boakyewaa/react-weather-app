import React from "react";
import './Weather.css';

export default function Weather(){
    return(
        <div className="Weather">
            <h1> Greater Accra </h1>
            <ul>
                <li>Current Weather</li>
                <li>3:49</li>
            </ul>
            <div className="row">
                <div className="col-3">
                      <img src="/images/icon-4.png" alt="weather-icon" />
            <strong>29°</strong> C
                </div>
                <div className="col-3">
                   <ul>
                      <li>Partly Sunny</li>  
                      <li>Feels like 34°</li>
                   </ul>
                   
                </div>
              
            </div>
             
        </div>
    );
}