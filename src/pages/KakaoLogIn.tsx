const KakaoLogIn = () => {
  const code = new URL(window.location.href).searchParams.get('code');

  console.log(code);

  return (
    <div>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.와</p>
    </div>
  );
};

export default KakaoLogIn;
