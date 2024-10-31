import styled from 'styled-components';

export const Information = styled.div`
  width: 393px;
  height: 330px;
  padding: 30px 7px 20px 7px;
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
    display: flex;
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

  $width: 90px;
  @if not($width > 100px) {
    color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
  }
`;
