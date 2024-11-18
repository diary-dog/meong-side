import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { THEME } from '@/shared/styles/theme';
import GlobalStyle from '@/shared/styles/GlobalStyle';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsThemeProvider theme={THEME}>
      <GlobalStyle />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
