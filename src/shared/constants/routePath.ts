const ROUTE_PATH = {
  ROOT: '/',
  INTRO: '/intro',
  KAKAO_LOGIN: '/oauth/kakao/callback',
  REGISTER_PET: '/register/pet',
  REGISTER_PEOPLE: '/register/people',
  VERIFICATION: '/verifications',
  UPLOAD: '/upload',
  UPLOAD_VERIFICATION: '/upload/:category',
  DETAIL_VERIFICATION: '/verifications/:verificationId',
  SLIDE: '/slide',
  GRID: '/grid',
  GRID_BY_TYPE: '/grid/:type',
  UPLOADER_GRID: '/grid/uploader/:userId',
  SETTING: '/setting',
  SENDING_INVITATION: '/setting/invitation',
  FAMILY: '/setting/family',
  CALENDAR: '/calendar',
} as const;

export default ROUTE_PATH;
