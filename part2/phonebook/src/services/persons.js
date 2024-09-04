import axios from 'axios';

const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => {
  const req = axios.get(BASE_URL);
  return req.then(resp => resp.data);
}

const create = newPerson => {
  const req = axios.post(BASE_URL, newPerson);
  return req.then(resp => resp.data);
}

const remove = id => {
  const req = axios.delete(`${BASE_URL}/${id}`);
  return req.then(resp => resp.data);
}

const update = (id, newNumber) => {
  const req = axios.put(`${BASE_URL}/${id}`, newNumber);
  return req.then(resp => resp.data);
}

export default { getAll, create, remove, update }