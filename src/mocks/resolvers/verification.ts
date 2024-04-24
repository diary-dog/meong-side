import { HttpResponse, delay } from 'msw';
import qs from 'qs';

import {
  verificationsForGridData,
  UploaderTypeVerificationsForGridData,
  verificationCountInfo,
  verificationForSlideData,
  verificationsForCalendarData,
} from '../datas/verification';
import { MSWResolvers } from '../../utils/mswUtils';

import type { UploadVerificationContents } from '../../types/verification';

export const verification = {
  getVerificationCount: async () => {
    await delay();
    return HttpResponse.json(verificationCountInfo);
  },

  uploadVerification: async ({ request }) => {
    await delay();
    const postVerification =
      (await request.json()) as UploadVerificationContents;
    const uploadedVerification: UploadVerificationContents = {
      ...postVerification,
      imageUrl: postVerification.imageUrl,
    };
    return HttpResponse.json(uploadedVerification);
  },

  getVerificationCalendar: async ({ request }) => {
    await delay();
    const queryString = new URL(request.url).search;
    const parsedQuery = qs.parse(queryString, { ignoreQueryPrefix: true });
    const year = Number(parsedQuery.year);
    const month = Number(parsedQuery.month);
    return HttpResponse.json(verificationsForCalendarData({ year, month }));
  },

  getVerificationForSlide: async ({ request }) => {
    await delay();
    const queryString = new URL(request.url).search;
    const parsedQuery = qs.parse(queryString, { ignoreQueryPrefix: true });
    const currentPage = Number(parsedQuery.currentPage);

    return HttpResponse.json(verificationForSlideData(currentPage));
  },

  getVerificationForAllGrid: async ({ request }) => {
    await delay();
    const queryString = new URL(request.url).search;
    const parsedQuery = qs.parse(queryString, { ignoreQueryPrefix: true });
    const currentPage = Number(parsedQuery.currentPage);
    return HttpResponse.json(verificationsForGridData(currentPage));
  },

  getVerificationForGridByUploader: async () => {
    await delay();
    return HttpResponse.json(UploaderTypeVerificationsForGridData);
  },

  getVerificationForUploaderGrid: async ({ params, request }) => {
    await delay();
    const { userId } = params;
    const queryString = new URL(request.url).search;
    const parsedQuery = qs.parse(queryString, { ignoreQueryPrefix: true });
    const currentPage = Number(parsedQuery.currentPage);

    if (!userId) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(verificationsForGridData(currentPage));
  },
} satisfies MSWResolvers;
