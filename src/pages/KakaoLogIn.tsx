import { useNavigate, useSearchParams } from 'react-router-dom';
import ROUTE_PATH from '../router/constants';
import { useEffect } from 'react';

const KakaoLogIn = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const code = search.get('code');

  useEffect(() => {
    if (code) {
      localStorage.setItem('token', 'test');
      navigate(ROUTE_PATH.ROOT);
    }
  }, [code, navigate]);

  return (
    <div>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
};

export default KakaoLogIn;
