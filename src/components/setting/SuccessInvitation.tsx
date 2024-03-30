import styled from 'styled-components';

import UserImage from '../common/UserImage';
import { Deco1, Deco2 } from '../Icons';
import { Button } from '..';

import * as S from './setting.styled';

const SuccessInvitation = ({ onNext }: { onNext: () => void }) => {
  const imageUrl = '';

  return (
    <Container>
      <S.HeaderBar>
        <div></div>
        <h3>공유링크보내기</h3>
        <div></div>
      </S.HeaderBar>
      <ImageWrapper>
        <Deco1 id="deco1" />
        <UserImage size="XL" imageUrl={imageUrl} />
        <Deco2 id="deco2" />
      </ImageWrapper>
      <SuccessMessage>
        <SuccussTitle>성공!</SuccussTitle>
        <p>
          초대받은 분이 링크를 누르면 <br />
          구성원에 추가될거에요!
        </p>
        <Button onClick={onNext} color={'INACTIVE-BUTTON'}>
          닫기
        </Button>
      </SuccessMessage>
    </Container>
  );
};
export default SuccessInvitation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 30px;
  margin-top: 90px;
  height: 100vh;
  position: relative;
`;

const ImageWrapper = styled.div`
  margin-top: 128px;
  margin-bottom: 100px;
  svg {
    position: absolute;
  }
  #deco1 {
    left: 33px;
    top: 17px;
  }
  #deco2 {
    top: 319px;
    right: 25px;
  }
`;
const SuccessMessage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  p {
    text-align: center;
    font-size: ${({ theme }) => theme.FONT.LG};
    margin-bottom: 10px;
  }
`;

const SuccussTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT.XL};
`;
