import axios from 'axios';

import { BACKEND_ENDPOINT } from '../constants/endPoint';
import { ApiError } from './customError';

const apiClient = axios.create({
  baseURL: BACKEND_ENDPOINT,
  headers: {
    accept: 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
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
