import { lazy } from 'react';

export const ErrorPage = lazy(() => import('../pages/ErrorPage'));
export const IntroPage = lazy(() => import('../pages/Intro'));
export const KakaoLogInPage = lazy(() => import('../pages/auth/KakaoLogIn'));
export const RegisterPage = lazy(
  () => import('../pages/register/RegisterPage')
);
export const HomePage = lazy(() => import('../pages/Home/HomePage'));
export const DetailVerificationPage = lazy(
  () => import('../pages/detailVerification/detailVerificationPage')
);
export const SlidePage = lazy(() => import('../pages/slide/SlidePage'));
export const GridPage = lazy(() => import('../pages/grid/GridPage'));
export const GridByUserPage = lazy(
  () => import('../pages/grid/GridByUserPage')
);
export const CalendarPage = lazy(
  () => import('../pages/calendar/CalendarPage')
);
export const SettingPage = lazy(() => import('../pages/setting/SettingPage'));
export const SendingInvitationPage = lazy(
  () => import('../pages/setting/SendingInvitationPage')
);
export const FamilyListPage = lazy(
  () => import('../pages/setting/FamilyListPage')
);
export const UploadVerificationPage = lazy(
  () => import('../pages/upload/UploadVerificationPage')
);
