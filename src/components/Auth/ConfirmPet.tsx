import styled from "styled-components";
import { Button, Input } from "../../components";

import UserImage from "../../components/common/UserImage";

const ConfirmPet = () => {
  return (
    <ConTainer>
      <IconWrapper>
        <UserImage size="XL" />
        <h3 className="title">이 아이가 맞나요?</h3>
        <p className="description">
          만약 아니라면 메인관리자에게 <br />
          다시한번 확인해주세요!
        </p>
      </IconWrapper>
      <Input placeholder="링크주소를 알려주세요." type="url" />
      <ButtonWrapper>
        <Button onClick={() => {}} color="P-BUTTON1">
          맞아요!
        </Button>
        <Button onClick={() => {}} color="INACTIVE-BUTTON">
          아니에요
        </Button>
      </ButtonWrapper>
    </ConTainer>
  );
};

export default ConfirmPet;

const ConTainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .title {
    margin-top: 30px;
    font-size: ${({ theme }) => theme.FONT.XL};
  }
  .description {
    font-size: ${({ theme }) => theme.FONT.LG};
    line-height: 25.6px;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
