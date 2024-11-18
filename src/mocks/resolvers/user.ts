import { HttpResponse } from 'msw';
import qs from 'qs';

import { MSWResolvers } from '@/shared/lib/mswUtils';
import axios from 'axios';

const {
  VITE_KAKAO_REST_API_KEY,
  VITE_KAKAO_REDIRECT_URI,
  VITE_KAKAO_CLIENT_SECRET,
} = import.meta.env;

interface KakaoLogin {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export const user = {
  kakaoLogin: async ({ request }) => {
    const body = (await request.json()) as { code: string };

    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: VITE_KAKAO_REST_API_KEY,
      redirect_uri: VITE_KAKAO_REDIRECT_URI,
      code: body.code,
      client_secret: VITE_KAKAO_CLIENT_SECRET,
    });
    try {
      const { data } = await axios.post<KakaoLogin>(
        'https://kauth.kakao.com/oauth/token',
        payload
      );
      // mocking 을 위하여 HttpOnly; Secure 미추가
      const cookie = `refresh_token=${data.refresh_token}; Path=/; Max-Age=604800; `;
      return HttpResponse.json(
        { message: '로그인을 성공했습니다.', accessToken: data.access_token },
        {
          headers: {
            'Set-Cookie': cookie,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  checkLogin: async ({ cookies }) => {
    if (cookies.access_token) {
      return HttpResponse.json({
        isLogin: true,
        message: '로그인 유저입니다.',
      });
    }
    return HttpResponse.json({
      isLogin: false,
      message: '비로그인 유저입니다.',
    });
  },
} satisfies MSWResolvers;
