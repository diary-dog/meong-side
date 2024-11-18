import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ROUTE_PATH from '../shared/constants/routePath';
import AuthProvider from '../providers/AuthProvider';
import {
  CalendarPage,
  DetailVerificationPage,
  ErrorPage,
  FamilyListPage,
  GridPage,
  GridByUserPage,
  HomePage,
  IntroPage,
  KakaoLogInPage,
  RegisterPage,
  SendingInvitationPage,
  SettingPage,
  SlidePage,
  UploadVerificationPage,
} from './lazy';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
    children: [
      {
        element: <IntroPage />,
        path: ROUTE_PATH.INTRO,
      },
      {
        element: <KakaoLogInPage />,
        path: ROUTE_PATH.KAKAO_LOGIN,
      },
      {
        element: <AuthProvider />,
        path: ROUTE_PATH.ROOT,
        children: [
          {
            element: <RegisterPage />,
            path: ROUTE_PATH.REGISTER_PET,
          },
          {
            element: <HomePage />,
            path: ROUTE_PATH.ROOT,
          },
          {
            element: <DetailVerificationPage />,
            path: ROUTE_PATH.DETAIL_VERIFICATION,
          },
          {
            element: <SlidePage />,
            path: ROUTE_PATH.SLIDE,
          },
          {
            element: <GridPage />,
            path: ROUTE_PATH.GRID_BY_TYPE,
          },
          {
            element: <GridByUserPage />,
            path: ROUTE_PATH.UPLOADER_GRID,
          },
          {
            element: <CalendarPage />,
            path: ROUTE_PATH.CALENDAR,
          },
          {
            element: <SettingPage />,
            path: ROUTE_PATH.SETTING,
          },
          {
            element: <SendingInvitationPage />,
            path: ROUTE_PATH.SENDING_INVITATION,
          },
          {
            element: <FamilyListPage />,
            path: ROUTE_PATH.FAMILY,
          },
          {
            element: <UploadVerificationPage />,
            path: ROUTE_PATH.UPLOAD_VERIFICATION,
          },
        ],
      },
    ],
  },
]);

export default router;
