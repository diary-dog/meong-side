const ROUTE_PATH = {
  ROOT: "/",
  HOME: "",
  INTRO: "intro",
  KAKAO_LOGIN: "/oauth/kakao/callback",
  REGISTER_PET: "/register/pet",
  REGISTER_PEOPLE: "/register/people",
  VERIFICATION: "/verification/:type",
  VERIFICATION_POST: "/verification/:type/post",
  SLIDE: "/slide",
  GRID: "/grid",
  SETTING: "/setting",
  CALENDAR: "/calendar",
} as const;

export default ROUTE_PATH;
