import { useLocation, useNavigate } from 'react-router-dom';
import ROUTE_PATH from '../constants/routePath';

const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    if (location.key === 'default') {
      navigate(ROUTE_PATH.ROOT);
    } else {
      navigate(-1);
    }
  };
};

export default useNavigateBack;
