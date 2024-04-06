import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getVerificationType } from '../../utils/getVerificationType';
import VerificationCheckIcon from './VerificationCheckIcon';

const ConformVerification = ({ onNext }: { onNext: () => void }) => {
  //강아지 정보 고려 (ex. url query, 전역상태, req header)
  const petName = '월이';
  const { type } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onNext();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [onNext]);

  return (
    <Container onClick={onNext}>
      <h2>
        {petName}가(이) {getVerificationType(type!)}하는 군요!
      </h2>
      <VerificationCheckIcon type={type!} />
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

  svg {
    width: 214px;
    height: 214px;
  }
`;
