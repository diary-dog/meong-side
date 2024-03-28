import styled from "styled-components";

import { InvitationIcon, RegisterPetIcon } from "../../components/Icons";
import { Container, Title } from "../../pages/Intro";

const SelectPet = () => {
  return (
    <Container>
      <Title>
        둘째딸 님,
        <br />
        마지막 단계에요!
      </Title>
      <ButtonItem type="register">
        <RegisterPetIcon />
        <h3>강아지를 등록할게요</h3>
        <p>
          본인이 메인관리자라면
          <br />
          강아지를 등록해주세요
        </p>
      </ButtonItem>
      <ButtonItem type="invitation">
        <InvitationIcon />
        <h3>초대링크가 있어요</h3>
        <p>
          이미 메인관리자가 있다면
          <br />
          메인관리자에게 초대링크를
          <br />
          받아주세요
        </p>
      </ButtonItem>
    </Container>
  );
};

export default SelectPet;

const ButtonItem = styled.div<{ type: "register" | "invitation" }>`
  width: 100%;
  max-width: 290px;
  height: 100%;
  max-height: 240px;
  border-radius: 30px;
  border: 1px solid
    ${({ theme, type }) =>
      type === "register" ? theme.COLORS["P-BUTTON1"] : theme.COLORS.DECO2};
  opacity: 0px;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-size: ${({ theme }) => theme.FONT.LG};
  text-align: center;
  line-height: 25.6px;

  cursor: pointer;
`;
