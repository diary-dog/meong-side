import { useQuery } from '@tanstack/react-query';

import { userKey } from '../../../shared/lib/query/queryKey';
import userAPI from './useAPI';

const useKakaoLogin = () => {
  return useQuery({
    queryKey: userKey.kakaoLogin(),
    queryFn: () => userAPI.kakaoLogin(),
  });
};
export default useKakaoLogin;
