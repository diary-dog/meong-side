import { http } from 'msw';

import { END_POINT } from '../../shared/constants/endPoint';
import { baseURL } from '../../shared/lib/mswUtils';
import { user } from '../resolvers/user';

export const userHandler = [
  /** kakao login */
  http.get(baseURL(END_POINT.KAKAO_TOKEN), user.kakaoLogin),
];
