import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f9f5f5;
`;

export const SlideWrapper = styled.div<{ $isLoggedInUser: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 20px;
  overflow: hidden;

  height: fit-content;

  align-items: ${({ $isLoggedInUser }) => ($isLoggedInUser ? 'end' : 'start')};
  .verification {
    margin: ${({ $isLoggedInUser }) =>
      $isLoggedInUser ? '0 50px 0 0' : '0 0 0 50px'};
  }

  .verification-item {
    background-color: ${({ theme, $isLoggedInUser }) =>
      $isLoggedInUser ? theme.COLORS['SECONDARY-DASH'] : theme.COLORS.DECO2};
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center center;
`;

export const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  gap: 10px;
`;

export const VerificationItem = styled.div`
  background-color: ${({ theme }) => theme.COLORS['SECONDARY-DASH']};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 218px;
  padding: 14px 34px;
  gap: 7px;
  border-radius: 30px;

  .category {
    font-size: ${({ theme }) => theme.FONT.MD};
    color: white;
    line-height: 20.48px;
    padding: 5px 40px;
  }
  .option {
    width: 77px;
    height: 35px;
    padding: 10px 12px;
    gap: 10px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
    font-size: ${({ theme }) => theme.FONT.XS};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Contents = styled.p`
  width: 218px;
  height: 44px;
  top: 1843px;
  left: 70px;
  padding: 7px 12px;
  gap: 8px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT.XS};
  background-color: ${({ theme }) => theme.COLORS['S-BUTTON']};
  line-height: 15.36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: ${({ theme }) => theme.FONT.XS};
  margin: -40px 0 0 0;
`;
