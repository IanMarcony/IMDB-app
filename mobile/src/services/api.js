import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_API_REST,
});

export default api;
