import { Outlet } from 'react-router-dom';
import ErrorResetBoundaryWrapper from './shared/error/ErrorResetBoundaryWrapper';

function App() {
  return (
    <ErrorResetBoundaryWrapper>
      <Outlet />
    </ErrorResetBoundaryWrapper>
  );
}

export default App;
