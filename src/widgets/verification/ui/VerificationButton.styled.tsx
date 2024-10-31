import styled from 'styled-components';

export const VerificationDaily = styled.div`
  width: 295px;
  height: 71px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.DECO1};
  font-size: ${({ theme }) => theme.FONT.MD};
  line-height: 20.48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  cursor: pointer;
`;
export const VerificationItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  width: 133px;
  height: 129px;
  padding: 20px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.FONT.MD};
  &#walk {
    border: 1px solid ${({ theme }) => theme.COLORS['P-BUTTON1']};
  }
  &#meal {
    border: 1px solid ${({ theme }) => theme.COLORS['P-BUTTON2']};
  }
  &#treats {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO2};
  }
  &#bath {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO3};
  }
`;
