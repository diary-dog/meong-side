import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  max-width: 393px;
  overflow: hidden;
  position: relative;
  z-index: 10;
`;
export const TopBar = styled.div<{ $hasGridType: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: ${({ $hasGridType }) =>
    $hasGridType ? 'center' : 'flex-start'};
  justify-content: ${({ $hasGridType }) =>
    $hasGridType ? 'center' : 'center'};
  background-color: white;
  width: 100%;
  height: 50px;
  max-width: 393px;
`;

export const SelectGridType = styled.div<{ $gridType: 'all' | 'uploader' }>`
  display: flex;
  gap: 15px;
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
export const BackButton = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;

export const Layout = styled.div`
  overflow-y: auto;
  position: relative;
  margin-top: 50px;
`;
