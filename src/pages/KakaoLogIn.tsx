import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import ROUTE_PATH from '../shared/constants/routePath';
import useKakaoLogin from '../entities/verification/api/useKakaoLogin';
import Spinner from '../shared/ui/Spinner';

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
    <Container>
      <Spinner />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
export default KakaoLogIn;
