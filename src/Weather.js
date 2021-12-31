import React from "react";
import './Weather.css';

export default function Weather(){
    return(
        <div className="Main-weather">
            <div className="search-button">
                 <input type="text" placeholder="Search for a location" className="search-input"/>
            <input type="button" className="btn btn-primary" value="Search"/>
            </div>
           <div className="Weather">
               <h1> Greater Accra </h1>
            <ul>
                <li><strong>CURRENT WEATHER</strong></li>
                <li>3:49</li>
            </ul>
            <div className="row">
                <div className="col-3">
                      <img src="/images/icon-4.png" alt="weather-icon" />
            <strong>29°</strong>C
                </div>
                <div className="col-3">
                   <ul>
                      <li>Partly Sunny</li>  
                      <li>Feels like 34°</li>
                   </ul>
                   
                </div>
              
            </div>
           </div>
            
             
        </div>
    );
}