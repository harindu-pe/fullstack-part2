import React, { useEffect, useState } from "react";
import weatherService from "../services/weather";

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (country) {
      weatherService.getWeather(country.capital[0]).then((initialWeather) => {
        setWeather(initialWeather);
      });
    }
  }, [country]);

  if (!country) {
    return null;
  }

  const languages = Object.values(country.languages);

  return (
    <div>
      <h1>
        <b>{country.name.common}</b>
      </h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <div>
        <h2>
          <b>languages:</b>
        </h2>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <img
        src={country.flags.svg}
        alt="flag"
        style={{ width: 200, height: 200 }}
      />
      <div>
        <h2>Weather in {country.capital[0]}</h2>
        <div>
          <div>
            temperature {weather && (weather.main.temp - 273.15).toFixed(2)}{" "}
            celsius
          </div>

          {weather && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
          )}

          <div>wind {weather && weather.wind.speed} m/s</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
