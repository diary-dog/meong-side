const ROUTE_PATH = {
  ROOT: '/',
  HOME: '',
  INTRO: 'intro',
  KAKAO_LOGIN: '/oauth/kakao/callback',
  REGISTER_PET: '/register/pet',
  REGISTER_PEOPLE: '/register/people',
  VERIFICATIONWALK: '/verificationWalk',
  VERIFICATION: '/verification',
  UPLOAD_VERIFICATION: '/verification/:type',
  SLIDE: '/slide',
  GRID: '/grid',
  GRID_BY_TYPE: '/grid/:type',
  GRID_BY_USER: '/grid/uploader/:userId',
  SETTING: '/setting',
  SENDING_INVITATION: '/setting/invitation',
  FAMILY: '/setting/family',
  CALENDAR: '/calendar',
} as const;

export default ROUTE_PATH;
