import { HttpResponse, delay } from 'msw';

import { verificationCountInfo } from '../datas/verification';
import { MSWResolvers } from '../../utils/mswUtils';
import { UploadVerificationContents } from '../../types/verification';

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
} satisfies MSWResolvers;
