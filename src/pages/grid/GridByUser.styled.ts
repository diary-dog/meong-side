import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background-color: white;
  width: 100%;
  max-width: 393px;
  top: 50px;
  height: 100px;
`;

export const BackButton = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const Uploader = styled.div`
  align-self: center;
  margin-top: 10px;
`;
