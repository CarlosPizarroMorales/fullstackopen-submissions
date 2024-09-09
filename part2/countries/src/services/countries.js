import axios from 'axios';
const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api';

const getAll = () => {
  const req = axios.get(`${BASE_URL}/all`);
  return req.then(resp => resp.data);
}

export default { getAll };