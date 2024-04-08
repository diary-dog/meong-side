import styled from 'styled-components';

export const WalkOptionContainer = styled.label<{ $isTyping: boolean }>`
  display: flex;
  width: 100%;
  max-height: 47px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px 19px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  font-size: ${({ theme }) => theme.FONT.XS};
  color: ${({ theme, $isTyping }) =>
    $isTyping ? theme.COLORS['FONT-COLOR-A'] : theme.COLORS['FONT-COLOR-IA']};
  input {
    width: 25px;
    height: 26px;
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS['INACTIVE-BUTTON']};
    text-align: center;
  }
`;

export const None = styled.div`
  width: 100%;
  height: 47px;
`;
