import styled from 'styled-components';
import { Button } from '../ui';
import { FallbackProps } from './ErrorBoundary';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
  <Container>
    <h3 id="title">오류가 발생했습니다</h3>
    {error instanceof Error && <p id="message">{error.message}</p>}
    <Button color="SECONDARY-DASH" onClick={resetErrorBoundary}>
      재시도
    </Button>
  </Container>
);

export default FallbackComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  gap: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 10px;
  #title {
    font-size: 30px;
    color: #bb3c3c;
    font-weight: 700;
  }

  #message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 20px;
  }
`;
