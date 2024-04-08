import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 13px;
`;
export const Information = styled.div`
  width: 393px;
  height: 349px;
  padding: 35px 7px 20px 7px;
  gap: 20px;
  background-color: ${({ theme }) => theme.COLORS['SECONDARY-DASH']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PetInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  #name {
    margin-top: 5px;
    font-size: ${({ theme }) => theme.FONT.LG};
  }
  #age {
    gap: 20px;
    font-size: ${({ theme }) => theme.FONT.MD};
    color: #666666;
  }
`;
export const VerificationInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  width: 376px;
  height: 99px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  font-size: ${({ theme }) => theme.FONT.MD};
  #title {
    text-align: center;
  }
`;

export const VerificationCount = styled.div`
  display: flex;
  gap: 20px;
  #walk {
    color: ${({ theme }) => theme.COLORS['P-BUTTON1']};
  }
  #meal {
    color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
  }
  #treat {
    color: ${({ theme }) => theme.COLORS.DECO2};
  }
  #bath {
    color: ${({ theme }) => theme.COLORS.DECO3};
  }
`;
export const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
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
  &#treat {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO2};
  }
  &#bath {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO3};
  }
`;
export const VerificationWrapper = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, 1fr);
`;
export const VerificationSurvival = styled.div`
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
