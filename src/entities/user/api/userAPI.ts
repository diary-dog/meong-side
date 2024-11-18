import { END_POINT } from '../../../shared/constants/endPoint';
import apiClient from '../../../shared/api';
import qs from 'qs';
import { Response } from '../../response.dto';

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
};

export default userAPI;
