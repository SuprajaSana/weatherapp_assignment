import { useState } from "react";

import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {
  const [city, setCity] = useState("");
    
    const searchHandler = () => {
        if (city === "") {
            return 0;
        }
        console.log(city);
    }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city" placeholder="Search" value={city} onChange={(e)=>setCity(e.target.value)}></input>
        <div className="search-icon" onClick={searchHandler}>
          <img src={search_icon} alt=""></img>
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt=""></img>
      </div>
      <div className="weather-temp">20C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon"></img>
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon"></img>
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;