const ACCESS_TOKEN = 'access_token';

export const tokenStorage = {
  getToken: () => window.localStorage.getItem(ACCESS_TOKEN),
  setToken: (token: string) => window.localStorage.setItem(ACCESS_TOKEN, token),
  clearToken: () => window.localStorage.removeItem(ACCESS_TOKEN),
};
