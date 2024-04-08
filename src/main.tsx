import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import router from './router/index.tsx';
import { ThemeProvider } from 'styled-components';
import { THEME } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

async function enableMocking() {
  if (import.meta.env.PROD) return;
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
);
