import { Navigate, Outlet } from 'react-router-dom';
import ROUTE_PATH from '../router/constants';

const AuthLayout = () => {
  if (!localStorage.getItem('token')) return <Navigate to={ROUTE_PATH.INTRO} />;

  return <Outlet />;
};

export default AuthLayout;
