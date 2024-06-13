import styled from 'styled-components';
import { Button } from '../../../shared/ui';

import UserImage from '../../../shared/ui/UserImage';
import { Title } from './RegisterGlobal.styled';

const ConfirmPeople = () => {
  const imageUrl = '';
  return (
    <Container>
      <Title className="title">계정확인</Title>
      <UserImage size="XL" imageUrl={imageUrl} />
      <ContentsWrapper>
        <Username>둘째딸</Username>
        <Button onClick={() => {}} color="P-BUTTON2">
          완료
        </Button>
      </ContentsWrapper>
    </Container>
  );
};

export default ConfirmPeople;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px 60px;
  margin-top: 90px;
  height: 100vh;
  gap: 40px;
`;
const ContentsWrapper = styled.div`
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
`;

const Username = styled.span`
  font-size: ${({ theme }) => theme.FONT.LG};
  line-height: 25.6px;
  width: 100%;
  border-bottom: 1px solid;
`;
