import { END_POINT } from '../../../shared/constants/endPoint';
import apiClient from '../../../shared/api';

const userAPI = {
  kakaoLogin: async () => {
    const { data } = await apiClient.get(END_POINT.KAKAO_TOKEN);
    return data;
  },
};

export default userAPI;
