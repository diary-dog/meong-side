import { Navigate, Outlet } from 'react-router-dom';

import ROUTE_PATH from '@/shared/constants/routePath';
import { useUserStore } from '@/app/model/useUserStore';

const PublicRoute = () => {
  const loggedInUser = useUserStore((state) => state.loggedInUser);

  if (loggedInUser) {
    return <Navigate to={ROUTE_PATH.ROOT} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
