import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import ErrorBoundary from '../shared/error/ErrorBoundary';
import FallbackComponent from '../shared/error/FallbackComponent';
import Spinner from '../shared/ui/Spinner';
import router from '@/router';

const Providers = () => {
  return (
    <ErrorBoundary fallback={FallbackComponent}>
      <QueryProvider>
        <ThemeProvider>
          <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
          </Suspense>
        </ThemeProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
