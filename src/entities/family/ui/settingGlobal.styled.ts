import styled from 'styled-components';

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: ${({ theme }) => theme.FONT.LG};
  line-height: 25.6px;
  #back-button {
    cursor: pointer;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px 60px;
  margin-top: 90px;
  height: 100vh;
  gap: 40px;
`;
export const ContentsWrapper = styled.div<{ $isValid: boolean }>`
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  p {
    font-size: ${({ theme }) => theme.FONT.LG};
    line-height: 25.6px;
  }
  input {
    color: ${({ $isValid, theme }) =>
      $isValid ? '#4462FF' : theme.COLORS['FONT-COLOR-A']};
  }
`;
export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.COLORS['P-BUTTON1']};
  margin: 5px 0;
`;
