import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';



function App() {

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;   // hide the api key in .env file and save it in gitignore folder
  const [weather, setWeather] = useState([{}]);
  const [city, setCity] = useState("");

  const getData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        setWeather(response)
        console.log(response.data);
      })
      .catch((error) => (console.log(error)));
  }

  return (
    <div className='text-center mt-5'>
      <input placeholder='City Name' value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={getData}>Search</button>

      {
        weather.length < 2 ?
          <div className="mt-2">
            Please enter city name
          </div>
          :
          <div className="container mt-3">
            <div className="row">
              <div className="col-sm-12 text-center">
                {weather.data.name}, {weather.data.sys.country}
              </div>
              <div className="col-sm-4 offset-4 text-center">
                {Math.round(weather.data.main.temp)} °C
              </div>
              <div className="col-sm-4 offset-4 text-center">
                {weather.data.weather[0].description}
              </div>
              <div>
                {<img src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="" />}
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
