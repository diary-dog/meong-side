import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import ROUTE_PATH from "../../router/constants";

const UploadEtc = () => {
  const { type } = useParams();

  const navigator = useNavigate();

  // 인증 업로드 구분
  const imgUploadpages = [
    0, // 산책
    1, // 식사
    2, // 간식
    3, // 목욕
    4, // 순간 포착 일상
  ];

  return (
    <>
      {imgUploadpages.map((imgUploadpage) => {
        <NavLink key={imgUploadpage} to="verification/$:type/upload" />;
      })}

      {/* 폼 데이터 전송은 전체 필수 값으로 */}
      <TextWrapper>
        <h2>{type} 순간 포착 일상인증</h2>
        <ImgWrapper>
          <input type="file" className="imgFile" />
        </ImgWrapper>
        <InputWrapper>
          <input type="text" placeholder="지금 이 순간을 코멘트해주세요." />
        </InputWrapper>
        <ButtonWrapper>
          <button onClick={() => navigator(ROUTE_PATH.HOME)} color="primary">
            전송!
          </button>
          <br />
          <button onClick={() => navigator(ROUTE_PATH.HOME)} color="D9D9D9">
            닫기
          </button>
        </ButtonWrapper>
      </TextWrapper>
    </>
  );
};

export default UploadEtc;

const TextWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const ImgWrapper = styled.div`
  margin: 20px auto 0;
  border: 1px solid #eee;
  background: #d9d9d9 url() center center no-repeat;
  border-radius: 16px;
  width: calc(100vw - 60px);
  max-width: 300px;
  height: calc(100vw - 60px);
  max-height: 300px;

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

const InputWrapper = styled.div`
  margin: 0 auto;
  width: calc(100% - 60px);

  input[type="text"] {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 6px 10px;
    margin-bottom: 10px;
  }

  .time-input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 6px 10px;
    margin-bottom: 10px;

    label {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
    }

    input[type="text"] {
      width: 36px;
      height: 100%;
      background: #ddd;
      border-radius: 4px;
    }
  }

  .option-button {
    width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: auto;
      padding: 4px 8px;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 14px;
      margin: 0 4px;
      height: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const ButtonWrapper = styled.button`
  width: 100%;

  button {
    &:first-of-type {
      background: #f48c29;
      border-radius: 30px;
      border: none;
      text-align: center;
      margin: 10px auto;
      width: 265px;
      height: 52px;
      font-size: 14px;
    }

    &:last-of-type {
      background: #d9d9d9 url() center center no-repeat;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
`;
