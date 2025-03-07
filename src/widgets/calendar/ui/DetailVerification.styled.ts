import styled from 'styled-components';
import {
  getVerificationCategoryColor,
  getVerificationCategoryTextColor,
} from '@/entities/verification/libs/getVerificationCategoryColor';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: white;
  padding: 18px 30px;
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 12px;
`;

export const SelectedDate = styled.h3`
  font-size: 20px;
  line-height: 25.6px;
  text-align: left;
`;

export const Round = styled.div<{ $category: string }>`
  width: 11px;
  height: 11px;
  background-color: ${({ $category }) =>
    getVerificationCategoryColor($category)};
  border-radius: 100%;
`;
export const VerificationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const VerificationTitle = styled.div`
  display: flex;
  gap: 5px;
  font-size: ${({ theme }) => theme.FONT.SM};
`;
export const VerificationItem = styled(Link)<{ $category: string }>`
  display: grid;
  grid-template-columns: 6fr 2fr 1fr;
  gap: 10px;
  align-items: center;
  padding: 3px;
  font-size: ${({ theme }) => theme.FONT.XS};
  text-decoration: none;

  span {
    white-space: nowrap;
  }
  #option {
    background-color: ${({ $category }) =>
      getVerificationCategoryColor($category)};
    color: ${({ $category }) => getVerificationCategoryTextColor($category)};
    width: fit-content;
    padding: 10px;
    border-radius: 20px;
  }
  #time {
    margin-left: auto;
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-WB']};
  }
`;
