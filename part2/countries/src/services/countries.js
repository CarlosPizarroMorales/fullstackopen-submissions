import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHERMAP;
const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
// Santiago,cl&APPID=chachaan!';

const getAll = () => {
  const req = axios.get(`${BASE_URL}/all`);
  return req.then(resp => resp.data);
}

const getWeather = (where) => {
  const req = axios.get(`${WEATHER_URL}${where}&units=metric&APPID=${apiKey}`);
  return req.then(resp => resp.data);
}

export default { getAll, getWeather };