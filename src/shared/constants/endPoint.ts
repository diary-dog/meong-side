const { VITE_API_BASE_URL } = import.meta.env;

export const BACKEND_ENDPOINT = VITE_API_BASE_URL || window.location.origin;

export const END_POINT = {
  PET: '/pets',
  PETS: {
    DETAIL: (petId: string) => createPath(END_POINT.PET, petId),
  },
  VERIFICATION: '/verifications',
  VERIFICATIONS: {
    COUNT: () => createPath(END_POINT.VERIFICATION, `count`),
    DETAIL: (verificationId: string) =>
      createPath(END_POINT.VERIFICATION, verificationId),
    CALENDAR: () => createPath(END_POINT.VERIFICATION, 'calendar'),
    SLIDE: () => createPath(END_POINT.VERIFICATION, 'slide'),
    GRID: () => createPath(END_POINT.VERIFICATION, 'grid'),
  },
  GRID_BY_UPLOADER: '/grid/uploader',
  UPLOADER_GRID: '/grid/:userId',
  FAMILY: (petId: string) => `/family/${petId}`,
  INVITE_MEMBER: (petId: string) => `/family/${petId}/member`,
  KAKAO_LOGIN: '/auth/kakao-login',
};

export function createPath(...pathArray: string[]) {
  return pathArray.join('/');
}
