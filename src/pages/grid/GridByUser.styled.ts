import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 200px);
  padding-top: 100px;
`;

export const Top = styled.div`
  position: fixed;
  width: 100%;
  max-width: 393px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  h3 {
    text-align: center;
  }
`;
