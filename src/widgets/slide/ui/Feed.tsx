import styled from 'styled-components';

import UserImage from '../../../shared/ui/UserImage';
import { getVerificationTitle } from '../../../shared/lib/getVerificationInfo';

import Spinner from '../../../shared/ui/Spinner';
import useInfiniteVerificationsForSlide from '../../../entities/verification/api/useInfiniteVerificationsForSlide';
import { VerificationCategoryType } from '../../../shared/constants/verification';
import {
  getVerificationCategoryColor,
  getVerificationCategoryTextColor,
} from '../../../shared/lib/getVerificationCategoryColor';
import formattedDate from '../../../shared/lib/formattedDate';

const Feed = () => {
  const { data, targetItemRef, isFetchingNextPage } =
    useInfiniteVerificationsForSlide();

  return (
    <Container>
      {data.map((verification) => (
        <FeedItemWrapper key={verification.id}>
          <FeedItemHeader $category={verification.category}>
            <UserImage size="XS" imageUrl={verification.author.imageUrl} />
            <div>
              <span>{verification.author.name}</span>
              <div>
                {verification.verificationOption && (
                  <p className="option">{verification.verificationOption}</p>
                )}
              </div>
            </div>
            <div className="info">
              <div className="category">
                {getVerificationTitle(verification.category)}
              </div>
              <p className="date">{formattedDate(verification.createdAt)}</p>
            </div>
          </FeedItemHeader>
          {verification.comment && (
            <p className="comment">{verification.comment}</p>
          )}
          {verification.imageUrl && (
            <img
              className="image"
              src={verification.imageUrl}
              alt={verification.createdAt}
            />
          )}
        </FeedItemWrapper>
      ))}
      <div ref={targetItemRef}></div>
      {isFetchingNextPage && <Spinner size={30} />}
    </Container>
  );
};

export default Feed;

export const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f9f5f5;
`;

const FeedItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 5px white solid;

  .image {
    align-self: center;
    width: 310px;
    height: 310px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center center;
  }
  .comment {
    line-height: 1.2;
  }
`;

const FeedItemHeader = styled.div<{ $category: VerificationCategoryType }>`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  & > * {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .info {
    margin-left: auto;
  }

  .category {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 20px;
    border-radius: 30px;
    font-size: 11px;
    background-color: ${({ $category }) =>
      getVerificationCategoryColor($category)};
    color: ${({ $category }) => getVerificationCategoryTextColor($category)};
  }
  .option {
    font-size: 12px;
  }
  .date {
    font-size: 11px;
  }
`;
