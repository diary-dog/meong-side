import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import userAPI from './userAPI';
import ROUTE_PATH from '../../../shared/constants/routePath';

const useKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (code: string) => userAPI.kakaoLogin(code),
    onSuccess: (data) => {
      console.log(data);
      // tokenStorage.setToken(data);
      navigate(ROUTE_PATH.ROOT);
    },
  });
};
export default useKakaoLogin;
