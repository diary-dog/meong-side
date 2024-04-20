import { HttpResponse, delay } from 'msw';
import qs from 'qs';

import {
  verificationCountInfo,
  verificationsForCalendarData,
} from '../datas/verification';
import { MSWResolvers } from '../../utils/mswUtils';

import type { UploadVerificationContents } from '../../types/verification';

export const verification = {
  getVerificationCount: {
    success: async () => {
      await delay();
      return HttpResponse.json(verificationCountInfo);
    },
  },

  uploadVerification: {
    success: async ({ request }) => {
      await delay();
      const postVerification =
        (await request.json()) as UploadVerificationContents;
      const uploadedVerification: UploadVerificationContents = {
        ...postVerification,
        imageUrl: postVerification.imageUrl,
      };
      return HttpResponse.json(uploadedVerification);
    },
  },

  getVerificationCalendar: {
    success: async ({ request }) => {
      await delay();
      const queryString = new URL(request.url).search;
      const parsedQuery = qs.parse(queryString, { ignoreQueryPrefix: true });
      const year = Number(parsedQuery.year);
      const month = Number(parsedQuery.month);
      return HttpResponse.json(verificationsForCalendarData({ year, month }));
    },
  },
} satisfies MSWResolvers;
