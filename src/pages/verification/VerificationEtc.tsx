import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const VerificationEtc = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지가 렌더링되면 2초 후에 리디렉션을 수행
    const redirectTimer = setTimeout(() => {
      navigate('/verification/etcpost'); // 리디렉션할 경로
    }, 2000);

    return () => clearTimeout(redirectTimer); // cleanup 함수를 이용하여 타이머를 해제
  }, [navigate]);

  return (
    <>
      <TextWrapper>
        <h2>일상이군요!</h2>
        <IconWapper>{/* 아이콘 */}</IconWapper>
        <p>인증성공!</p>
      </TextWrapper>
    </>
  );
};

export default VerificationEtc;

const TextWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 38px;

  &:p {
    font-size: 24px;
  }
`;

const IconWapper = styled.div`
  margin-top: 50px;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  padding: 100px;
  background: #f48c29;
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;
