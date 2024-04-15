const { VITE_BASE_URL } = import.meta.env;

export const BACKEND_ENDPOINT = import.meta.env.DEV
  ? window.location.origin
  : VITE_BASE_URL;

export const END_POINT = {
  HOME: `/api/home`,
  UPLOAD: '/api/posts',
} as const;
