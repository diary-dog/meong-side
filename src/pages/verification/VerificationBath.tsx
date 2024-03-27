import { useParams } from "react-router-dom";
import styled from "styled-components";

const Verification = () => {
  const { type } = useParams();

  return (
    <>
      <TextWrapper>
        <h2>{type} 목욕하는군요!</h2>
        <PWrapper>{/* 아이콘 */}</PWrapper>
        <p>인증성공!</p>
      </TextWrapper>
    </>
  );
};

export default Verification;

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

const PWrapper = styled.div`
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
