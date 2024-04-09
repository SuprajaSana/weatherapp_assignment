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
  const [wicon, setWicon] = useState();
  const [show, setShow] = useState(false);
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState();

  let api_key = "aaaec2812127b9cec84690f1a0eb7a2d";

  const searchHandler = async () => {
    if (city === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
      let response = await fetch(url);
      let data = await response.json();

      setShow(true);

      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-speed");
      const temp = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      //   humidity[0].innerHTML = data.main.humidity + "%";
      //   wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
      //   temp[0].innerHTML = Math.floor(data.main.temp) + "°c";
      //   location[0].innerHTML = data.name;

      setHumidity(data.main.humidity + "%");
      setWind(Math.floor(data.wind.speed) + " km/h");
      setTemp(Math.floor(data.main.temp) + "°c");
      setLocation(data.name);

      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWicon(clear_icon);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setWicon(cloud_icon);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n" ||
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n" ||
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        setWicon(rain_icon);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

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
        <img src={wicon} alt=""></img>
      </div>
      <div className="weather-temp">{temp}</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          {show && <img src={humidity_icon} alt="" className="icon"></img>}
          <div className="data">
            <div className="humidity-percent">{humidity}</div>
            {show && <div className="text">Humidity</div>}
          </div>
        </div>
        <div className="element">
          {show && <img src={wind_icon} alt="" className="icon"></img>}
          <div className="data">
            <div className="wind-speed">{wind}</div>
            {show && <div className="text">Wind Speed</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
