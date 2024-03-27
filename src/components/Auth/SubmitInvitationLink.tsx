import styled from "styled-components";

import { Button, Input } from "../../components";
import { InvitationIcon } from "../../components/Icons";

const SubmitInvitationLink = () => {
  return (
    <ConTainer>
      <IconWrapper>
        <InvitationIcon />
        <h3 className="title">초대링크가 있어요</h3>
      </IconWrapper>
      <Input placeholder="링크주소를 알려주세요." type="url" isValid />
      <ButtonWrapper>
        <Button onClick={() => {}} color="P-BUTTON2">
          확인
        </Button>
        <Button onClick={() => {}} color="INACTIVE-BUTTON">
          닫기
        </Button>
      </ButtonWrapper>
    </ConTainer>
  );
};

export default SubmitInvitationLink;

const ConTainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 85px;
  height: 100vh;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
  .title {
    font-size: ${({ theme }) => theme.FONT.LG};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
