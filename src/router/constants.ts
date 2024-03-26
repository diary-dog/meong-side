const ROUTE_PATH = {
  ROOT: "/",
  HOME: "",
  INTRO: "intro",
  LOGIN: "/login",
  REGISTER_DOG: "/register/dog",
  REGISTER_PEOPLE: "/register/people",
  VERIFICATION: "/verification/:type",
  VERIFICATION_UPLOAD: "/verification/:type/upload",
  SLIDE: "/slide",
  GRID: "/grid",
  SETTING: "/setting",
  CALENDAR: "/calendar",
} as const;

export default ROUTE_PATH;
