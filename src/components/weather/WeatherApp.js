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

    let api_key = "aaaec2812127b9cec84690f1a0eb7a2d";
    
    const searchHandler = async() => {
        if (city === "") {
            return 0;
        }
       
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temp[0].innerHTML = data.main.temp + "°c";
        location[0].innerHTML = data.name;

        console.log(data);

    }

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <div className="search-icon" onClick={searchHandler}>
          <img src={search_icon} alt=""></img>
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt=""></img>
      </div>
      <div className="weather-location">London</div>
      <div className="weather-temp">20°c</div>
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
