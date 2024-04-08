import Button from '../components/Button';
import { Dog, Ellipse, HeartCircle, KaKaoIcon } from '../components/Icons';

import * as S from './Intro.styled';

const { VITE_KAKAO_REST_API_KEY, VITE_KAKAO_REDIRECT_URI } = import.meta.env;

const Intro = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <S.Container>
      <S.Title>
        안녕하세요.
        <br />
        멍스토리입니다.
      </S.Title>
      <S.SVGWrapper>
        <HeartCircle className="heart" />
        <Dog className="dog" />
        <Ellipse className="ellipse" />
      </S.SVGWrapper>
      <Button onClick={loginHandler} color="P-BUTTON1">
        <S.ButtonTitle>
          <KaKaoIcon />
          카카오톡으로 시작
        </S.ButtonTitle>
      </Button>
    </S.Container>
  );
};

export default Intro;
