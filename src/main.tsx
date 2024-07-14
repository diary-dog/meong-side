import React from 'react';
import ReactDOM from 'react-dom/client';

import { SKIP_MSW_WARNING_URL } from './shared/constants/msw';

import Providers from './providers/index.tsx';

async function enableMocking() {
  const { worker } = await import('./mocks/browser.ts');
  return worker.start({
    onUnhandledRequest(request, print) {
      if (SKIP_MSW_WARNING_URL.some((url) => request.url.includes(url))) {
        return;
      }
      print.warning();
    },
  });
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Providers />
    </React.StrictMode>
  )
);
