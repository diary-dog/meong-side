import { RouterProvider } from 'react-router-dom';

import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import ErrorBoundary from '../shared/error/ErrorBoundary';
import FallbackComponent from '../shared/error/FallbackComponent';
import router from '../router';

const Providers = () => {
  return (
    <ErrorBoundary fallback={FallbackComponent}>
      <QueryProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
