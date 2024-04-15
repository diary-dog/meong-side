import { BACKEND_ENDPOINT } from '../constants/endPoint';

export const getSearchParams = (key: string) => {
  return new URLSearchParams(window.location.search).get(key);
};

export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};
