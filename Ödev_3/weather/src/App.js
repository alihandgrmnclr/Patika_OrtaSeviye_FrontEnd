import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from "axios"
import { useEffect, useState } from 'react';

import Weather from './components/Weather';

function App() {

  const apiKey = "40292a35611f3cc34715fd0dce08e194";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = () => {
    axios.get(` https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
      .then((data) => { setWeatherData(data) })
    console.log(weatherData);
    console.log(weatherData.length)
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
                {weatherData.data.city.name}, {weatherData.data.city.country}
              </div>}

            <div className="mt-3">
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
