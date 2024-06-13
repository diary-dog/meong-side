import axios from 'axios';
import { BACKEND_ENDPOINT } from '../constants/endPoint';

const apiClient = axios.create({
  baseURL: BACKEND_ENDPOINT,
  headers: {
    accept: 'application/json',
  },
});
export default apiClient;
