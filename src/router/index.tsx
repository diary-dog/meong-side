import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ROUTE_PATH from "./constants";
import {
  ErrorPage,
  Intro,
  Register,
  Slide,
  UploadWalk,
  UploadBath,
  UploadMeal,
  UploadSnack,
  UploadEtc,
  VerificationWalk,
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
        element: <VerificationWalk />,
        path: ROUTE_PATH.VERIFICATIONWALK,
      },
      {
        element: <UploadWalk />,
        path: ROUTE_PATH.VERIFICATION_WALKPOST,
      },
      {
        element: <UploadBath />,
        path: ROUTE_PATH.VERIFICATION_BATHPOST,
      },
      {
        element: <UploadMeal />,
        path: ROUTE_PATH.VERIFICATION_MEALPOST,
      },
      {
        element: <UploadSnack />,
        path: ROUTE_PATH.VERIFICATION_SNACKPOST,
      },
      {
        element: <UploadEtc />,
        path: ROUTE_PATH.VERIFICATION_ETCPOST,
      },
    ],
  },
]);

export default router;
