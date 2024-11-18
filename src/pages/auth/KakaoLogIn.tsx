import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import Spinner from '@/shared/ui/Spinner';
import useKakaoLogin from '@/entities/user/mutations/useKakaoLogin';
import ROUTE_PATH from '@/shared/constants/routePath';

const KakaoLogIn = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { mutate } = useKakaoLogin();

  useEffect(() => {
    if (!code) {
      navigate(ROUTE_PATH.INTRO);
      return;
    }
    mutate(code);
  }, [code, mutate, navigate]);

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
