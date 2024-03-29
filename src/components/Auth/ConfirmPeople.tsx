import styled from 'styled-components';
import { Button } from '../../components';

import UserImage from '../../components/common/UserImage';
import { Title } from './Auth.styled';

const ConfirmPeople = () => {
  const imageUrl = '';
  return (
    <Container>
      <Title className="title">계정확인</Title>
      <UserImage size="XL" imageUrl={imageUrl} />
      <ContentWrapper>
        <Username>둘째딸</Username>
        <Button onClick={() => {}} color="P-BUTTON2">
          완료
        </Button>
      </ContentWrapper>
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
const ContentWrapper = styled.div`
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
