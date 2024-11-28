import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import userAPI from '../api/userAPI';
import ROUTE_PATH from '@/shared/constants/routePath';
import { prefetchQueryLoggedInUser } from '../queries/useLoggedInUserQuery';
import { tokenStorage } from '@/shared/lib/tokenStorage';

const useKakaoLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (code: string) => userAPI.kakaoLogin(code),
    onSuccess: async ({ data }) => {
      tokenStorage.setToken(data.accessToken);
      await prefetchQueryLoggedInUser();
      navigate(ROUTE_PATH.ROOT);
    },
    onError: (error) => {
      console.error(error);
      //TODO: 토스트메시지 추가
      navigate(ROUTE_PATH.INTRO);
    },
  });
};
export default useKakaoLogin;
