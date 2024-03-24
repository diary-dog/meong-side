import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ROUTE_PATH from "./constants";
import {
  ErrorPage,
  Intro,
  LogIn,
  RegisterDog,
  RegisterPeople,
  Slides,
  Upload,
  Verification,
  Setting,
  Home,
} from "../pages";

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
        element: <LogIn />,
        path: ROUTE_PATH.LOGIN,
      },
      {
        element: <RegisterPeople />,
        path: ROUTE_PATH.REGISTER_PEOPLE,
      },
      {
        element: <RegisterDog />,
        path: ROUTE_PATH.REGISTER_DOG,
      },
      {
        element: <Slides />,
        path: ROUTE_PATH.SLIDES,
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
        path: ROUTE_PATH.VERIFICATION_UPLOAD,
      },
    ],
  },
]);

export default router;
