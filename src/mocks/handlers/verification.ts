import { http } from 'msw';
import { END_POINT } from '../../shared/constants/endPoint';
import { verification } from '../resolvers/verification';
import { baseURL } from '../../shared/lib/mswUtils';
import withAuth from '../middleware/withAuth';

export const verificationHandler = [
  /** verification count 및 pet info 조회 */
  http.get(
    baseURL(END_POINT.VERIFICATIONS.COUNT()),
    withAuth(verification.getVerificationCount)
  ),

  /** pet verification post */
  http.post(
    baseURL(END_POINT.VERIFICATION),
    withAuth(verification.uploadVerification)
  ),

  /** get verification for calendar data */
  http.get(
    baseURL(END_POINT.VERIFICATIONS.CALENDAR()),
    withAuth(verification.getVerificationCalendar)
  ),

  /** get verification for slide data */
  http.get(
    baseURL(END_POINT.VERIFICATIONS.SLIDE()),
    withAuth(verification.getVerificationForSlide)
  ),

  /** get verification for grid all data */
  http.get(
    baseURL(END_POINT.VERIFICATIONS.GRID()),
    withAuth(verification.getVerificationForAllGrid)
  ),

  /** get verification for grid by Uploader data */
  http.get(
    baseURL(END_POINT.GRID_BY_UPLOADER),
    withAuth(verification.getVerificationForGridByUploader)
  ),

  /** get verification for one specific uploader grid data */
  http.get(
    baseURL(END_POINT.UPLOADER_GRID),
    withAuth(verification.getVerificationForUploaderGrid)
  ),

  /** get detail verification by id*/
  http.get(
    baseURL(END_POINT.VERIFICATIONS.DETAIL(':verificationId')),
    withAuth(verification.getDetailVerification)
  ),
];
