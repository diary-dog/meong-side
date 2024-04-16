import QueryString from 'qs';

import apiClient from '.';
import { END_POINT } from '../constants/endPoint';
import type {
  UploadVerificationContents,
  VerificationCount,
} from '../types/verification';

const verificationAPI = {
  /** verification count 및 pet info 조회 */
  getVerificationCount: async (petId: number) => {
    const query = QueryString.stringify({ petId: petId }, { skipNulls: true });
    const { data } = await apiClient.get<VerificationCount>(
      `${END_POINT.HOME}?${query}`
    );
    return data;
  },
  /** pet verification post */
  postVerification: async (body: UploadVerificationContents) => {
    const { data } = await apiClient.post<UploadVerificationContents>(
      END_POINT.POST,
      body
    );
    return data;
  },
};

export default verificationAPI;
