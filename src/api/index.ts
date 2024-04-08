import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

const baseUrl = import.meta.env.DEV ? window.location.origin : VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: 'application/json',
  },
});
export default apiClient;
