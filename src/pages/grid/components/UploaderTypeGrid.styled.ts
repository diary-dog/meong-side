import styled from 'styled-components';

export const GridContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  height: calc(100vh - 250px);
  overflow: auto;
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
