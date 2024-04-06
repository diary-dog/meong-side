import styled from 'styled-components';
import { CheckedDog } from '../../components/Icons';
import { useEffect } from 'react';

const ConformVerification = ({ onNext }: { onNext: () => void }) => {
  //강아지 정보 고려 (ex. url query, 전역상태, req header)
  const petName = '월이';

  useEffect(() => {
    setTimeout(() => {
      onNext();
    }, 1000);
  }, [onNext]);

  return (
    <Container onClick={onNext}>
      <h2>{petName}가(이) 산책하는 군요!</h2>
      <CheckedDog width={214} height={214} />
      <span>인증성공!</span>
    </Container>
  );
};

export default ConformVerification;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 47px;
  font-size: ${({ theme }) => theme.FONT.XL};

  margin-top: 80px;
`;
