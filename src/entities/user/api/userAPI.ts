import qs from 'qs';

import apiClient from '@/shared/api';
import { END_POINT } from '@/shared/constants/endPoint';
import { Response } from '@/shared/dto/response.dto';
import { User } from '../user.dto';

const userAPI = {
  kakaoLogin: async (code: string) => {
    const query = qs.stringify({ code });
    const { data } = await apiClient.post<
      Response<{
        message: string;
        accessToken: string;
      }>
    >(`${END_POINT.KAKAO_LOGIN}?${query}`);
    return data;
  },
  getLoggedInUser: async () => {
    const { data } = await apiClient.get<Response<User>>(
      END_POINT.LOGGED_IN_USER
    );
    return data;
  },
};

export default userAPI;
