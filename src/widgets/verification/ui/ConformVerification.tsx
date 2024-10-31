import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getVerificationMetadata } from '../../../shared/lib/getVerificationInfo';
import VerificationCheckIcon from './VerificationCheckIcon';

import * as S from './ConformVerification.styled';

const ConformVerification = ({ onNext }: { onNext: () => void }) => {
  //강아지 정보 고려 (ex. url query, 전역상태, req header)
  const petName = '월이';
  const { category } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onNext();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [onNext]);

  return (
    <S.Container onClick={onNext}>
      <h2>
        {petName}가(이) {getVerificationMetadata(category!).title}하는 군요!
      </h2>
      <VerificationCheckIcon category={category!} />
      <span>인증성공!</span>
    </S.Container>
  );
};

export default ConformVerification;
