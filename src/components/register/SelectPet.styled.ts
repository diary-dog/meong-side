import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 10px 45px;
  height: 100vh;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 38.4px;
  align-self: flex-start;
`;
export const ButtonItem = styled.button<{
  $selectType: 'register' | 'invitation';
}>`
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 270px;
  border-radius: 30px;
  border: 1px solid
    ${({ theme, $selectType }) =>
      $selectType === 'register'
        ? theme.COLORS['P-BUTTON1']
        : theme.COLORS.DECO2};
  opacity: 0px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 14px;

  font-size: ${({ theme }) => theme.FONT.LG};
  text-align: center;
  line-height: 25.6px;

  cursor: pointer;
`;
