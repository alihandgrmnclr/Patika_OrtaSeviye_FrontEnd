import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';



function App() {

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;   // hide the api key in .env file and save it in gitignore folder
  const apiKey2 = process.env.REACT_APP_WEATHERBIT_API_KEY; //weatherBit apikey
  const [weather, setWeather] = useState([{}]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);


  const getWeather = () => {
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=en&days=7&key=${apiKey2}`)
      .then((response) => {
        setWeather(response)
        //console.log("WeatherBit: ", response.data)
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false))
  }

  const getData = () => {

    //axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=${apiKey}&units=metric`)
      .then((response) => {
        setWeather(response)
        console.log(response.data);
      })
      .catch((error) => (console.log(error)));
  }
  return (
    <div className="app-body">

      <div className='text-center'>
        <h1>Welcome to My Weather App</h1> <br />
        <input className="form-control" type="text" placeholder='City Name' value={city} onChange={(e) => setCity(e.target.value)} />
        <button className='btn btn-primary mt-2' onClick={getWeather}>Search</button>

        {
          weather.length < 2 ?
            <div className="mt-2">
              Please enter city name
            </div>
            :
            
            <div className="container mt-3">
              {loading && <div>Loading...</div>}
              {!loading &&
                <div className="row">
                  <div className="col-sm-12">
                    <h3>{weather.data.city_name}, {weather.data.country_code}</h3>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-3">
                        {weather.data.data[0].valid_date}<br />
                        Average<b> {weather.data.data[0].temp}</b> °C <br />
                        Max<b> {weather.data.data[0].max_temp}</b> °C <br />
                        Min<b> {weather.data.data[0].min_temp}</b> °C <br />
                        {weather.data.data[0].weather.description}  <br />
                        <img src={`https://www.weatherbit.io/static/img/icons/${weather.data.data[0].weather.icon}.png`} alt="" />
                      </div>
                      <div className="col-sm-3">
                        {weather.data.data[1].valid_date} <br />
                        Average<b> {weather.data.data[1].temp}</b> °C <br />
                        Max<b> {weather.data.data[1].max_temp}</b> °C <br />
                        Min<b> {weather.data.data[1].min_temp}</b> °C <br />
                        {weather.data.data[1].weather.description}  <br />
                        <img src={`https://www.weatherbit.io/static/img/icons/${weather.data.data[1].weather.icon}.png`} alt="" />

                      </div>
                      <div className="col-sm-3">
                        {weather.data.data[2].valid_date} <br />
                        Average<b> {weather.data.data[2].temp}</b> °C <br />
                        Max<b> {weather.data.data[2].max_temp}</b> °C <br />
                        Min<b> {weather.data.data[2].min_temp}</b> °C <br />
                        {weather.data.data[2].weather.description}  <br />
                        <img src={`https://www.weatherbit.io/static/img/icons/${weather.data.data[2].weather.icon}.png`} alt="" />

                      </div>
                      <div className="col-sm-3">
                        {weather.data.data[3].valid_date} <br />
                        Average<b> {weather.data.data[3].temp}</b> °C <br />
                        Max<b> {weather.data.data[3].max_temp}</b> °C <br />
                        Min<b> {weather.data.data[3].min_temp}</b> °C <br />
                        {weather.data.data[3].weather.description}  <br />
                        <img src={`https://www.weatherbit.io/static/img/icons/${weather.data.data[3].weather.icon}.png`} alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>

          // <div className="container mt-3">
          //   <div className="row">
          //     <div className="col-sm-12">
          //       {weather.data.city.name}, {weather.data.city.country}
          //     </div>
          //     <div className="col-sm-12">
          //       {weather.data.list[0].dt_txt}
          //     </div>
          //     <div className="col-sm-12">
          //       {weather.data.list[0].weather[0].description}
          //     </div>
          //   </div>
          // </div>
          //----------------------------------------------------------
          // <div className="container mt-3">
          //   <div className="row">
          //     <div className="col-sm-4 offset-4 text-center">
          //       {weather.data.name}, {weather.data.sys.country}
          //     </div>
          //     <div>

          //     </div>
          //     <div className="col-sm-4 offset-4 text-center">
          //       {Math.round(weather.data.main.temp)} °C
          //     </div>
          //     <div className="col-sm-4 offset-4 text-center">
          //       {weather.data.weather[0].description}
          //     </div>
          //     <div>
          //       {<img src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="" />}
          //     </div>
          //   </div>
          // </div>
        }
      </div>
    </div>
  );
}

export default App;
