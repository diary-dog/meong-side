import { END_POINT } from '../../../shared/constants/endPoint';
import apiClient from '../../../shared/api';
import qs from 'qs';

const userAPI = {
  kakaoLogin: async (code: string) => {
    const query = qs.stringify({ code });
    const { data } = await apiClient.get<{
      message: string;
      accessToken: string;
    }>(`${END_POINT.KAKAO_LOGIN}?${query}`);
    return data;
  },
};

export default userAPI;
