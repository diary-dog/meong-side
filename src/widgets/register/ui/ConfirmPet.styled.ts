import styled from 'styled-components';

export const ConTainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .title {
    margin-top: 30px;
    font-size: ${({ theme }) => theme.FONT.XL};
  }
  .description {
    font-size: ${({ theme }) => theme.FONT.LG};
    line-height: 25.6px;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
