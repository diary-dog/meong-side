import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;
export const ContentsWrapper = styled.div<{ $hasTop: boolean }>`
  padding: ${({ $hasTop }) => ($hasTop ? '50px 0 100px 0' : '0 0 100px 0')};
`;

export const BOTTOM = {
  Container: styled.div`
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 393px;
    bottom: 0;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  `,
  Title: styled.span`
    font-size: ${({ theme }) => theme.FONT.SM};
  `,
};

export const TOP = {
  Wrapper: styled.div<{ $backGroundColor?: string }>`
    position: fixed;
    height: 50px;
    width: 100%;
    max-width: 393px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${({ $backGroundColor }) =>
      $backGroundColor ? $backGroundColor : 'white'};

    .blank {
      width: 30px;
    }
    svg {
      cursor: pointer;
    }
  `,
  Title: styled.h2`
    text-align: center;
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-A']};
    font-size: ${({ theme }) => theme.FONT.LG};
  `,
};
