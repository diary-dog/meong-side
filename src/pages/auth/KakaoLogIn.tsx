import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../../shared/ui/Spinner';
import userAPI from '../../entities/verification/api/userAPI';

const KakaoLogIn = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      if (code) {
        console.log(code);
        const response = await userAPI.kakaoLogin(code);
        console.log(response);
      }
    })();
  }, [code]);

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
