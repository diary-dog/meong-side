import styled from "styled-components";
import { Button, Input } from "../../components";

import UserImage from "../../components/common/UserImage";
import { CameraIcon, Female, Male } from "../../components/Icons";
import { Title } from "../../pages/Intro";

const RegisterPet = () => {
  const imageUrl = "";
  return (
    <Container>
      <Title className="title">
        반가워요!
        <br />
        우리 아이를 등록해주세요.
      </Title>
      {imageUrl ? (
        <UserImage size="XL" />
      ) : (
        <DefaultImage>
          <div className="border">
            <CameraIcon className="svg" />
          </div>
        </DefaultImage>
      )}
      <InputWrapper>
        <Input placeholder="이름" type="email" isValid={false} />
        <Input placeholder="태어난해" type="number" isValid={true} />
        <GenderWrapper>
          <GenderItem id="male">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">
              <Male /> 남아
            </label>
          </GenderItem>
          <GenderItem id="female">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">
              <Female />
              여아
            </label>
          </GenderItem>
        </GenderWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => {}} color="P-BUTTON2">
          완료
        </Button>
        <Button onClick={() => {}} color="INACTIVE-BUTTON">
          닫기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default RegisterPet;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 100vh;
  gap: 32px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;

  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const DefaultImage = styled.label`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS["INACTIVE-BUTTON"]};
  border-radius: 100%;
  width: 214px;
  height: 214px;
  cursor: pointer;
  .border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 85px;
    background-color: white;
    border-radius: 100%;
  }
  .svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const GenderWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const GenderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 45px;
  padding: 7px 25px;
  gap: 8px;
  border-radius: 20px;
  opacity: 0px;
  &#male {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO4};
  }
  &#female {
    border: 1px solid ${({ theme }) => theme.COLORS.DECO3};
  }
  input {
    display: none;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;
