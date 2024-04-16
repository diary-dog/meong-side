import QueryString from 'qs';

import apiClient from '.';
import { VerificationCount } from '../types/verification';
import { END_POINT } from '../constants/endPoint';

const verificationAPI = {
  /** verification count 및 pet info 조회 */
  getVerificationCount: async (petId: number) => {
    const query = QueryString.stringify({ petId: petId }, { skipNulls: true });
    const { data } = await apiClient.get<VerificationCount>(
      `${END_POINT.HOME}?${query}`
    );
    return data;
  },
};

export default verificationAPI;
