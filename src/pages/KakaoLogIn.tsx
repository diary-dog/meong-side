import { useNavigate, useSearchParams } from 'react-router-dom';
import ROUTE_PATH from '../shared/constants/routePath';
import { useEffect } from 'react';
import useKakaoLogin from '../entities/verification/api/useKakaoLogin';

const KakaoLogIn = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { mutateAsync } = useKakaoLogin();

  useEffect(() => {
    (async () => {
      if (code) {
        const data = await mutateAsync(code);
        localStorage.setItem('token', data.accessToken);
        navigate(ROUTE_PATH.ROOT);
      }
    })();
  }, [code, mutateAsync, navigate]);

  return (
    <div>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
};

export default KakaoLogIn;
