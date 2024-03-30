import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: white;
  width: 100%;
  max-width: 393px;
  top: 50px;
  height: 50px;
`;

export const SelectGridType = styled.div<{ $gridType: 'all' | 'uploader' }>`
  display: flex;
  gap: 15px;
  height: 30px;
  font-size: ${({ theme }) => theme.FONT.SM};
  #all {
    color: ${({ theme, $gridType }) =>
      $gridType === 'all'
        ? theme.COLORS['P-BUTTON2']
        : theme.COLORS['FONT-COLOR-WB']};
  }
  #uploader {
    color: ${({ theme, $gridType }) =>
      $gridType === 'uploader'
        ? theme.COLORS['P-BUTTON2']
        : theme.COLORS['FONT-COLOR-WB']};
  }
`;
