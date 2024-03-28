import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/common/Button";
import { Dog, Ellipse, HeartCircle, KaKaoIcon } from "../components/Icons";
import ROUTE_PATH from "../router/constants";

const Intro = () => {
  const navigator = useNavigate();

  return (
    <Container>
      <Title>
        안녕하세요.
        <br />
        멍스토리입니다.
      </Title>
      <SVGWrapper>
        <HeartCircle className="heart" />
        <Dog className="dog" />
        <Ellipse className="ellipse" />
      </SVGWrapper>
      <Button
        onClick={() => navigator(ROUTE_PATH.REGISTER_DOG)}
        color="P-BUTTON1"
      >
        <ButtonTitle>
          <KaKaoIcon />
          카카오톡으로 시작
        </ButtonTitle>
      </Button>
    </Container>
  );
};

export default Intro;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 57px;
  gap: 25px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 38.4px;
  align-self: flex-start;
  margin-top: 19px;
`;

const SVGWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  .heart {
    align-self: flex-end;
    margin-right: 55px;
    margin-bottom: 15px;
  }
  .ellipse {
    margin-top: -42px;
    z-index: -1;
  }
`;
const ButtonTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
