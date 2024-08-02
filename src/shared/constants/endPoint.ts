const { VITE_BASE_URL } = import.meta.env;

export const BACKEND_ENDPOINT = import.meta.env.DEV
  ? window.location.origin
  : VITE_BASE_URL;

export const END_POINT = {
  HOME: `/api/home`,
  POST: '/api/post',
  CALENDAR: '/api/calendar',
  SLIDE: '/api/slide',
  GRID: '/api/grid',
  GRID_BY_UPLOADER: '/api/grid/uploader',
  UPLOADER_GRID: '/api/grid/:userId',
  FAMILY: (petId: string) => `/api/family/${petId}`,
  INVITE_MEMBER: (petId: string) => `/api/family/${petId}/member`,
  KAKAO_TOKEN: '/auth/kakao-login-page',
} as const;
