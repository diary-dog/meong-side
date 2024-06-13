import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 47px;
  font-size: ${({ theme }) => theme.FONT.XL};
  margin-top: 80px;

  svg {
    width: 214px;
    height: 214px;
  }
`;
