import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import QueryProvider from './QueryProvider';
import ThemeProvider from './ThemeProvider';
import ErrorBoundary from '../shared/error/ErrorBoundary';
import FallbackComponent from '../shared/error/FallbackComponent';
import Spinner from '../widgets/common/Spinner';
import router from '../router';
import ErrorResetBoundaryWrapper from '@/shared/error/ErrorResetBoundaryWrapper';
import AuthProvider from './AuthProvider';

const Providers = () => {
  return (
    <ErrorBoundary fallback={FallbackComponent}>
      <QueryProvider>
        <ThemeProvider>
          <Suspense fallback={<Spinner />}>
            <ErrorResetBoundaryWrapper>
              <AuthProvider>
                <RouterProvider router={router} />
              </AuthProvider>
            </ErrorResetBoundaryWrapper>
          </Suspense>
        </ThemeProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
