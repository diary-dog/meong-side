import styled from 'styled-components';
import { getVerificationCategoryColor } from '../../../shared/lib/getVerificationCategoryColor';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  padding: 25px 0;
  border-radius: 20px;
`;

export const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-row-gap: 15px;
`;
export const CalendarItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const VerificationCircles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.29px;
`;
export const CategoryCircle = styled.div<{
  $category?: string;
}>`
  width: 7.86px;
  height: 7.86px;
  background-color: ${({ $category }) =>
    $category && getVerificationCategoryColor($category)};
  visibility: ${({ $category }) => ($category ? 'visible' : 'hidden')};
  border-radius: 100%;
`;

export const Day = styled.div<{
  $isCurrentMonth?: boolean;
  $isSelectedDate: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10.14px;
  cursor: pointer;
  visibility: ${({ $isCurrentMonth }) =>
    $isCurrentMonth ? 'visible' : 'hidden'};
  background-color: ${({ $isSelectedDate }) =>
    $isSelectedDate ? '#FFFFE1' : 'transparent'};

  ${({ $isCurrentMonth }) =>
    !$isCurrentMonth &&
    `
    ${CategoryCircle} {
      visibility: hidden;
    }
  `}
`;
