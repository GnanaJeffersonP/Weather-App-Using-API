
import { useState } from "react";
import axios from "axios";
import Output from "./Output";

function Search() {
  const [city, setcity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handlecity(evt) {
    setcity(evt.target.value);
  }

  function getWeather() {
    const Weatherdata = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5bd277b9aa4fa5b3edfb9bba2e7f3086`
    );

    Weatherdata.then(function (success) {
      console.log(success.data);
      setWeatherData(success.data);
    }).catch(function (error) {
      console.log(error.response?.data || error.message);
    });
  }

  return (
    <div>
      <div>
        <h1 className="text-white text-center mt-10 text-5xl font-bold">
          CHECK TODAY{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
            WEATHER
          </span>
        </h1>

        <p className="text-white text-center mt-5 text-lg">
          Get real-time weather updates for any city in the world
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-2xl items-center gap-3 rounded-3xl border border-white/30 bg-white/10 p-3 shadow-xl shadow-black/30 backdrop-blur-xl mt-5">
        <input
          value={city}
          onChange={handlecity}
          type="text"
          placeholder="Enter a city name..."
          className="min-w-0 flex-1 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 outline-none transition-all duration-300 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
        />

        <button
          onClick={getWeather}
          className="shrink-0 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Search
        </button>
      </div>

      <Output weatherData={weatherData} />
    </div>
  );
}

export default Search;
