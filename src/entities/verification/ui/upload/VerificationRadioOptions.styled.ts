import styled from 'styled-components';

export const VerificationOptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.FONT.XS};

  input {
    display: none;
  }
  label {
  }
`;
export const OptionLabel = styled.label`
  height: 35px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  color: ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  font-size: ${({ theme }) => theme.FONT.XS};

  &:has(input:checked) {
    background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    border-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-A']};
  }
`;
