import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import ROUTE_PATH from './shared/constants/routePath';
import AuthProvider from './providers/AuthProvider';
import { lazy } from 'react';

const ErrorPage = lazy(async () => await import('./pages/ErrorPage'));
const Intro = lazy(async () => await import('./pages/Intro'));
const KakaoLogIn = lazy(async () => await import('./pages/KakaoLogIn'));
const Register = lazy(
  async () => await import('./pages/register/RegisterPage')
);
const Home = lazy(async () => await import('./pages/Home/HomePage'));
const DetailVerification = lazy(
  async () => await import('./pages/detailVerification/detailVerificationPage')
);
const SlidePage = lazy(async () => await import('./pages/slide/SlidePage'));
const Grid = lazy(async () => await import('./pages/grid/GridPage'));
const GridByUser = lazy(
  async () => await import('./pages/grid/GridByUserPage')
);
const Calendar = lazy(
  async () => await import('./pages/calendar/CalendarPage')
);
const Setting = lazy(async () => await import('./pages/setting/SettingPage'));
const SendingInvitation = lazy(
  async () => await import('./pages/setting/SendingInvitationPage')
);
const FamilyList = lazy(
  async () => await import('./pages/setting/FamilyListPage')
);
const UploadVerification = lazy(
  async () => await import('./pages/upload/UploadVerificationPage')
);

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
    children: [
      {
        element: <Intro />,
        path: ROUTE_PATH.INTRO,
      },
      {
        element: <KakaoLogIn />,
        path: ROUTE_PATH.KAKAO_LOGIN,
      },
      {
        element: <AuthProvider />,
        path: ROUTE_PATH.ROOT,
        children: [
          {
            element: <Register />,
            path: ROUTE_PATH.REGISTER_PET,
          },
          {
            element: <Home />,
            path: ROUTE_PATH.ROOT,
          },
          {
            element: <DetailVerification />,
            path: ROUTE_PATH.DETAIL_VERIFICATION,
          },
          {
            element: <SlidePage />,
            path: ROUTE_PATH.SLIDE,
          },
          {
            element: <Grid />,
            path: ROUTE_PATH.GRID_BY_TYPE,
          },
          {
            element: <GridByUser />,
            path: ROUTE_PATH.UPLOADER_GRID,
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
            element: <SendingInvitation />,
            path: ROUTE_PATH.SENDING_INVITATION,
          },
          {
            element: <FamilyList />,
            path: ROUTE_PATH.FAMILY,
          },
          {
            element: <UploadVerification />,
            path: ROUTE_PATH.UPLOAD_VERIFICATION,
          },
        ],
      },
    ],
  },
]);

export default router;
