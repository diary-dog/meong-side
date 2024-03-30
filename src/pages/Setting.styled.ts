import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const LoggedInUserField = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 30px 0 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS['SECONDARY-DASH']};
`;

export const FamilyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  position: relative;
`;

export const FamilyTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.FONT.LG};
  line-height: 25.6px;
`;

export const FamilyWrapper = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
`;

export const FamilyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.FONT.XS};
`;

export const MessageItem = styled.div`
  position: absolute;
  top: 67px;
  left: 152px;

  #message-body {
    position: absolute;
    top: 8px;
    left: 30px;
    width: 190px;
    font-size: ${({ theme }) => theme.FONT.SM};
    line-height: 17.92px;
  }
`;
