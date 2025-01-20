import axios from "axios";
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

const getWeather = (city) => {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}`;
  const request = axios.get(url);
  return request.then((res) => res.data);
};

export default {
  getWeather,
};
