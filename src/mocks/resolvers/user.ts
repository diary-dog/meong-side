import { HttpResponse, delay } from 'msw';
import axios from 'axios';
import qs from 'qs';

import { MSWResolvers } from '../../shared/lib/mswUtils';

const {
  VITE_KAKAO_REST_API_KEY,
  VITE_KAKAO_REDIRECT_URI,
  VITE_KAKAO_CLIENT_SECRET,
} = import.meta.env;

interface ResponseKakaoLogin {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export const user = {
  getFamilyMembers: async ({ request }) => {
    await delay();
    const queryString = new URL(request.url).search;
    const parsedQuery = qs.parse(queryString, { ignoreQueryPrefix: true });

    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: VITE_KAKAO_REST_API_KEY,
      redirect_uri: VITE_KAKAO_REDIRECT_URI,
      code: parsedQuery.code,
      client_secret: VITE_KAKAO_CLIENT_SECRET,
    });

    try {
      const { data } = await axios.post<ResponseKakaoLogin>(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      // mocking 을 위하여 HttpOnly; Secure 미추가
      const cookie = `access_token=${data.access_token}; Path=/; Max-Age=${data.expires_in};`;
      return HttpResponse.json(
        { data },
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
