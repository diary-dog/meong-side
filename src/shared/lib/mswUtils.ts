import { DefaultBodyType, HttpResponseResolver, PathParams } from 'msw';

import { BACKEND_ENDPOINT } from '../constants/endPoint';

export const getSearchParams = (key: string) => {
  return new URLSearchParams(window.location.search).get(key);
};

export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};

export type MSWResolvers = Record<
  string,
  HttpResponseResolver<PathParams, DefaultBodyType, undefined>
>;
