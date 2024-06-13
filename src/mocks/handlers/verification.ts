import { http } from 'msw';
import { END_POINT } from '../../shared/constants/endPoint';
import { verification } from '../resolvers/verification';
import { baseURL } from '../../shared/lib/mswUtils';

export const verificationHandler = [
  /** verification count 및 pet info 조회 */
  http.get(baseURL(END_POINT.HOME), verification.getVerificationCount),

  /** pet verification post */
  http.post(baseURL(END_POINT.POST), verification.uploadVerification),

  /** get verification for calendar data */
  http.get(baseURL(END_POINT.CALENDAR), verification.getVerificationCalendar),

  /** get verification for slide data */
  http.get(baseURL(END_POINT.SLIDE), verification.getVerificationForSlide),

  /** get verification for grid all data */
  http.get(baseURL(END_POINT.GRID), verification.getVerificationForAllGrid),

  /** get verification for grid by Uploader data */
  http.get(
    baseURL(END_POINT.GRID_BY_UPLOADER),
    verification.getVerificationForGridByUploader
  ),

  /** get verification for one specific uploader grid data */
  http.get(
    baseURL(END_POINT.UPLOADER_GRID),
    verification.getVerificationForUploaderGrid
  ),
];
