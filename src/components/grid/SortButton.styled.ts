import styled from 'styled-components';

export const SelectSortType = styled.div<{
  $sortType: 'ascending' | 'descending';
}>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 393px;
  height: 35px;
  gap: 15px;
  top: 100px;
  font-size: ${({ theme }) => theme.FONT.XS};
  background-color: white;
  #ascending {
    color: ${({ $sortType }) =>
      $sortType === 'ascending' ? '#000000' : '#ABA8A8'};
  }
  #descending {
    color: ${({ $sortType }) =>
      $sortType === 'descending' ? '#000000' : '#ABA8A8'};
  }
`;
