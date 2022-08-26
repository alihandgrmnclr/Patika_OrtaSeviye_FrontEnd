import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from "axios"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';

import Weather from './components/Weather';

function App() {

  const apiKey = "40292a35611f3cc34715fd0dce08e194";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = () => {
    axios.get(` https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
      .then((data) => { setWeatherData(data) })
    console.log(weatherData);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3 mt-5 d-flex justify-content-center">
            <input
              placeholder="City Name"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button onClick={getWeather}>Search</button>

          </div>
          <div className="container mt-2 text-center">
            {weatherData.length < 3 ? <div>Please enter the city name.</div> :
              <div className="text-center">
                <h3>{weatherData.data.city.name}, {weatherData.data.city.country} </h3><br />
                <p>{weatherData.data.list[0].dt_txt}, <b>{Math.round(weatherData.data.list[0].main.temp)}°C</b> {weatherData.data.list[0].weather[0].main}</p>

                <p>{weatherData.data.list[1].dt_txt}, <b>{Math.round(weatherData.data.list[1].main.temp)}°C</b> {weatherData.data.list[1].weather[0].main}</p>

                <p>{weatherData.data.list[2].dt_txt}, <b>{Math.round(weatherData.data.list[2].main.temp)}°C</b> {weatherData.data.list[2].weather[0].main}</p>

                <p>{weatherData.data.list[3].dt_txt}, <b>{Math.round(weatherData.data.list[3].main.temp)}°C</b> {weatherData.data.list[3].weather[0].main}</p>

                <p>{weatherData.data.list[4].dt_txt}, <b>{Math.round(weatherData.data.list[4].main.temp)}°C</b> {weatherData.data.list[4].weather[0].main}</p>

              </div>}

            <div className="mt-3">
              <Weather values={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
