const ROUTE_PATH = {
  ROOT: "/",
  HOME: "",
  INTRO: "intro",
  KAKAO_LOGIN: "/oauth/kakao/callback",
  REGISTER_PET: "/register/pet",
  REGISTER_PEOPLE: "/register/people",
  VERIFICATION: "/verification",
  VERIFICATION_POST: "/verification/post",
  VERIFICATION_BATHPOST: "/verification/bathpost",
  VERIFICATION_MEALPOST: "/verification/mealpost",
  VERIFICATION_SNACKPOST: "/verification/snackpost",
  VERIFICATION_ETCPOST: "/verification/etcpost",
  SLIDE: "/slide",
  GRID: "/grid",
  SETTING: "/setting",
  CALENDAR: "/calendar",
} as const;

export default ROUTE_PATH;
