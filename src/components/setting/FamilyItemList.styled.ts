import styled from 'styled-components';

export const FamilyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  position: relative;
`;

export const FamilyTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.FONT.LG};
  line-height: 25.6px;
`;

export const FamilyWrapper = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
`;

export const FamilyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.FONT.XS};
`;
