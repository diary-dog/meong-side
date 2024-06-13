import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import router from './router';
import { SKIP_MSW_WARNING_URL } from './shared/constants/msw';

import Layout from './Layout';

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
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </React.StrictMode>
  )
);
