import { createBrowserRouter } from 'react-router-dom';

import ROUTE_PATH from '../shared/constants/routePath';
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
import ProtectedRoute from '@/providers/ProtectedRoute';
import PetOwnerRoute from '@/providers/RegisterPetRoute';
import PublicRoute from '@/providers/PublicRoute';

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          { element: <RegisterPage />, path: ROUTE_PATH.REGISTER_PET },
        ],
      },
      {
        element: <PetOwnerRoute />,
        children: [
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
  {
    element: <PublicRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <IntroPage />,
        path: ROUTE_PATH.INTRO,
      },
      {
        element: <KakaoLogInPage />,
        path: ROUTE_PATH.KAKAO_LOGIN,
      },
    ],
  },
]);

export default router;
