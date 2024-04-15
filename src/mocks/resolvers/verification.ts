import { HttpResponse, delay } from 'msw';

import { verificationCountInfo } from '../datas/verification';

export const verification = {
  getVerificationCount: {
    success: async () => {
      await delay();

      return HttpResponse.json(verificationCountInfo);
    },
  },
};
