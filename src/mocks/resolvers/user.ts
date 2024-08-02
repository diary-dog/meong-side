import { HttpResponse, delay } from 'msw';

import { MSWResolvers } from '../../shared/lib/mswUtils';

export const user = {
  kakaoLogin: async () => {
    await delay();
    try {
      // mocking 을 위하여 HttpOnly; Secure 미추가
      const cookie = `access_token=access-token; Path=/; Max-Age=604800;`;
      return HttpResponse.json(
        { data: '로그인 성공' },
        {
          headers: {
            'Set-Cookie': cookie,
          },
        }
      );
    } catch (error) {
      console.error('Error fetching Kakao access token:', error);
      return HttpResponse.error();
    }
  },
} satisfies MSWResolvers;
