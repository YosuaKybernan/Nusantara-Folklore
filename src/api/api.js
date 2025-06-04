// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://684003555b39a8039a567976.mockapi.io/api',
});

export default api;
