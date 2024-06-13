import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 30px;
  margin-top: 90px;
  height: 100vh;
  position: relative;
`;

export const ImageWrapper = styled.div`
  margin-top: 128px;
  margin-bottom: 100px;
  svg {
    position: absolute;
  }
  #deco1 {
    left: 33px;
    top: 17px;
  }
  #deco2 {
    top: 319px;
    right: 25px;
  }
`;
export const SuccessMessage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  p {
    text-align: center;
    font-size: ${({ theme }) => theme.FONT.LG};
    margin-bottom: 10px;
  }
`;

export const SuccussTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT.XL};
`;
