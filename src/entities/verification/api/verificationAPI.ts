import qs from 'qs';

import { END_POINT } from '../../../shared/constants/endPoint';
import type {
  SortType,
  UploadVerificationContents,
  VerificationCount,
  VerificationForSlide,
  VerificationsForCalendar,
  VerificationsFroGrid,
  VerificationsForGridByUploader,
  VerificationResponse,
} from '../../../shared/types/verification';
import apiClient from '../../../shared/api';

const verificationAPI = {
  /** verification count 및 pet info 조회 */
  getVerificationCount: async (petId: string) => {
    const query = qs.stringify({ petId: petId }, { skipNulls: true });
    const { data } = await apiClient.get<VerificationCount>(
      `${END_POINT.VERIFICATIONS.COUNT()}?${query}`
    );
    return data;
  },
  /** verification detail info 조회 */
  getDetailVerification: async (verificationId: string) => {
    const { data } = await apiClient.get<VerificationResponse>(
      END_POINT.VERIFICATIONS.DETAIL(verificationId)
    );
    return data;
  },
  /** pet verification post */
  postVerification: async (body: UploadVerificationContents) => {
    const { data } = await apiClient.post<UploadVerificationContents>(
      END_POINT.VERIFICATION,
      body
    );
    return data;
  },
  /** get verification for calendar data */
  getVerificationCalendar: async ({
    year,
    month,
  }: {
    year: number;
    month: number;
  }) => {
    const query = qs.stringify({ year, month });
    const { data } = await apiClient.get<VerificationsForCalendar>(
      `${END_POINT.VERIFICATIONS.CALENDAR()}?${query}`
    );
    return data;
  },
  /** get verification for slide data */
  getVerificationForSlide: async ({ currentPage }: { currentPage: number }) => {
    const query = qs.stringify({ currentPage });
    const { data } = await apiClient.get<VerificationForSlide>(
      `${END_POINT.VERIFICATIONS.SLIDE()}?${query}`
    );
    return data;
  },
  /** get verification for all grid data  */
  getAllGridVerifications: async ({
    sort,
    currentPage,
  }: {
    sort: SortType;
    currentPage: number;
  }) => {
    const query = qs.stringify({ sort, currentPage }, { skipNulls: true });
    const { data } = await apiClient.get<VerificationsFroGrid>(
      `${END_POINT.VERIFICATIONS.GRID()}?${query}`
    );
    return data;
  },
  /** get verification for grid by uploader data  */
  getVerificationByUploaderForGrid: async () => {
    const { data } = await apiClient.get<VerificationsForGridByUploader[]>(
      END_POINT.GRID_BY_UPLOADER
    );
    return data;
  },
  /** get verification for uploader grid data  */
  getGridVerificationsForUploader: async ({
    uploaderId,
    sort,
    currentPage,
  }: {
    uploaderId: string;
    sort: SortType;
    currentPage: number;
  }) => {
    const query = qs.stringify({ sort, currentPage }, { skipNulls: true });
    const { data } = await apiClient.get<VerificationsFroGrid>(
      `${END_POINT.VERIFICATIONS.GRID()}/${uploaderId}?${query}`
    );
    return data;
  },
};

export default verificationAPI;
