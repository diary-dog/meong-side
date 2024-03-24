const ROUTE_PATH = {
  ROOT: "/",
  HOME: "",
  INTRO: "intro",
  LOGIN: "login",
  REGISTER_DOG: "register/dog",
  REGISTER_PEOPLE: "register/people",
  VERIFICATION: "verification/:type",
  VERIFICATION_UPLOAD: "verification/:type/upload",
  SLIDES: "slides",
  SETTING: "setting",
} as const;

export default ROUTE_PATH;
