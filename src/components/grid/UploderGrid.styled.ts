import styled from 'styled-components';

export const GridContainer = styled.div`
  padding: 140px 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;
export const UploaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Uploader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
