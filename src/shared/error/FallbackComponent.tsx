import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FallbackProps } from './ErrorBoundary';
import ROUTE_PATH from '../constants/routePath';
import Button from '../../widgets/common/Button';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <h3 id="title">오류가 발생했습니다</h3>
      {error instanceof Error && <p id="message">{error.message}</p>}
      <ButtonWrapper>
        <Button color="SECONDARY-DASH" onClick={resetErrorBoundary}>
          재시도
        </Button>
        <Button
          color="SECONDARY-DASH"
          onClick={() => {
            navigate(ROUTE_PATH.ROOT);
            resetErrorBoundary();
          }}
        >
          홈으로 이동하기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
