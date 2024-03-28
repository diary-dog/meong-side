const ROUTE_PATH = {
  ROOT: "/",
  HOME: "",
  INTRO: "intro",
  LOGIN: "login",
  REGISTER_DOG: "register/dog",
  REGISTER_PEOPLE: "register/people",
  VERIFICATION: "verification/:type",
  VERIFICATION_UPLOAD: "verification/:type/upload",
  VERIFICATION_UPLOADMEAL: "verification/:type/UploadMeal",
  VERIFICATION_UPLOADBATH: "verification/:type/UploadBath",
  VERIFICATION_UPLOADSNACK: "verification/:type/UploadSnack",
  VERIFICATION_UPLOADETC: "verification/:type/UploadEtc",
  SLIDES: "slides",
  SETTING: "setting",
} as const;

export default ROUTE_PATH;
