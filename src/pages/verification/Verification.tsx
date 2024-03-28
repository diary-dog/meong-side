import styled from "styled-components";

const Verification = () => {
  return (
    <>
      <TextWrapper>
        <h2>산책하는군요!</h2>
        <IconWapper>{/* 아이콘 */}</IconWapper>
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
