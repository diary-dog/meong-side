import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { VerificationCategoryType } from '@/entities/verification/constants';
import {
  getVerificationCategoryColor,
  getVerificationCategoryTextColor,
} from '@/entities/verification/libs/getVerificationCategoryColor';

export const FeedItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 5px white solid;
  text-decoration: none;
  color: black;

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

export const FeedItemHeader = styled.div<{
  $category: VerificationCategoryType;
}>`
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
