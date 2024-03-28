import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ROUTE_PATH from "./constants";
import {
  ErrorPage,
  Intro,
  Register,
  Slide,
  Upload,
  UploadMeal,
  UploadBath,
  UploadSnack,
  UploadEtc,
  Verification,
  Setting,
  Home,
  Grid,
  Calendar,
} from "../pages";
import KakaoLogIn from "../pages/auth/KakaoLogIn";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
    children: [
      {
        element: <Home />,
        path: ROUTE_PATH.HOME,
      },
      {
        element: <Intro />,
        path: ROUTE_PATH.INTRO,
      },
      {
        element: <KakaoLogIn />,
        path: ROUTE_PATH.KAKAO_LOGIN,
      },
      {
        element: <Register />,
        path: ROUTE_PATH.REGISTER_PET,
      },
      {
        element: <Slide />,
        path: ROUTE_PATH.SLIDE,
      },
      {
        element: <Grid />,
        path: ROUTE_PATH.GRID,
      },
      {
        element: <Calendar />,
        path: ROUTE_PATH.CALENDAR,
      },
      {
        element: <Setting />,
        path: ROUTE_PATH.SETTING,
      },
      {
        element: <Verification />,
        path: ROUTE_PATH.VERIFICATION,
      },
      {
        element: <Upload />,
        path: ROUTE_PATH.VERIFICATION_POST,
      },
      {
        element: <UploadMeal />,
        path: ROUTE_PATH.VERIFICATION_UPLOADMEAL,
      },
      {
        element: <UploadBath />,
        path: ROUTE_PATH.VERIFICATION_UPLOADBATH,
      },
      {
        element: <UploadSnack />,
        path: ROUTE_PATH.VERIFICATION_UPLOADSNACK,
      },
      {
        element: <UploadEtc />,
        path: ROUTE_PATH.VERIFICATION_UPLOADETC,
      },
    ],
  },
]);

export default router;
