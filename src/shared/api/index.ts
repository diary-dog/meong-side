import axios from 'axios';

import { BACKEND_ENDPOINT } from '../constants/endPoint';
import { ApiError } from './customError';

const apiClient = axios.create({
  baseURL: BACKEND_ENDPOINT,
  headers: {
    accept: 'application/json',
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = window.localStorage.getItem('token');
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error: Error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: Error) => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.message || error.message;
      const status = error.response?.status || 500;
      const data = error.response?.data;
      return Promise.reject(new ApiError(message, status, data));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
