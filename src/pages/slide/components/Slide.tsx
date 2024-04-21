import UserImage from '../../../components/UserImage';
import useVerificationForSlide from '../hooks/queries';
import { getVerificationTitle } from '../../../utils/getVerificationInfo';

import * as S from './Slide.styled';
import Spinner from '../../../components/Spinner';
import useControlScroll from '../hooks/useContorlScroll';

const loggedUserId = '1';

const Slide = () => {
  const { data, targetItemRef, isFetchingNextPage } = useVerificationForSlide();
  const { containerRef } = useControlScroll();

  return (
    <S.Container ref={containerRef}>
      {isFetchingNextPage && <Spinner size={30} />}
      <div ref={targetItemRef}></div>
      {data.map((verification) => (
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
