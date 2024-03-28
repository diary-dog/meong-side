import axios from "axios";
import QueryString from "qs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "../../router/constants";

const {
  VITE_KAKAO_REST_API_KEY,
  VITE_KAKAO_REDIRECT_URI,
  VITE_KAKAO_CLIENT_SECRET,
} = import.meta.env;

const KakaoLogIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
      const payload = QueryString.stringify({
        grant_type: "authorization_code",
        client_id: VITE_KAKAO_REST_API_KEY,
        redirect_uri: VITE_KAKAO_REDIRECT_URI,
        code: code,
        client_secret: VITE_KAKAO_CLIENT_SECRET,
      });
      try {
        const response = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          payload,
        );
        // response.data 에서 access_token 과 refresh_token이 존재함
        console.log(response);
        navigate(ROUTE_PATH.REGISTER_PET);
      } catch (error) {
        console.error(error);
      }
    };
    getToken();
  }, [navigate]);

  return (
    <div>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.와</p>
    </div>
  );
};

export default KakaoLogIn;
