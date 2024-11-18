import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

import Spinner from '../../shared/ui/Spinner';
import useKakaoLogin from '../../entities/verification/api/useKakaoLogin';

const KakaoLogIn = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { mutate } = useKakaoLogin();

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code, mutate]);

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
