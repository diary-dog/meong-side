import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  padding: 0 0 100px 0;
  gap: 16px 8px;
  overflow-y: auto;
`;

export const VerificationImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
`;
export const ClickedImage = styled.img`
  width: 100%;
  cursor: pointer;
`;
