import { http } from 'msw';
import { baseURL } from '../../utils/mswUtils';
import { END_POINT } from '../../constants/endPoint';
import { verification } from '../resolvers/verification';

export const verificationHandler = [
  /** verification count 및 pet info 조회 */
  http.get(baseURL(END_POINT.HOME), verification.getVerificationCount.success),
];
