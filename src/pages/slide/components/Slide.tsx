import { useLayoutEffect } from 'react';

import UserImage from '../../../components/UserImage';
import useVerificationForSlide from '../hooks/queries';
import { getVerificationTitle } from '../../../utils/getVerificationInfo';

import * as S from './Slide.styled';

const loggedUserId = '1';

const Slide = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  const { items } = useVerificationForSlide({ currentPage: 1 });

  return (
    <S.Container>
      {items.map((verification) => (
        <S.SlideWrapper
          $isLoggedInUser={loggedUserId === verification.author.id}
          key={verification.id}
        >
          <S.VerificationWrapper className="verification">
            <S.VerificationItem className="verification-item">
              <h3 className="category">
                {getVerificationTitle(verification.category)}
              </h3>
              {verification.verificationOption && (
                <p className="option">{verification.verificationOption}</p>
              )}
              {verification.imageUrl && (
                <S.Image
                  src={verification.imageUrl}
                  alt={verification.createdAt}
                />
              )}
            </S.VerificationItem>
            {verification.comment && (
              <S.Comment>{verification.comment}</S.Comment>
            )}
          </S.VerificationWrapper>
          <S.Author>
            <UserImage size="XS" imageUrl={verification.author.imageUrl} />
            <span>{verification.author.name}</span>
          </S.Author>
        </S.SlideWrapper>
      ))}
    </S.Container>
  );
};

export default Slide;
