import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ROUTE_PATH from "../../router/constants";

const UploadSnack = () => {
  const navigator = useNavigate();

  return (
    <>
      {/* 폼 데이터 전송은 전체 필수 값으로 */}
      <TextWrapper>
        <h2>간식 인증 순간 남기기</h2>
        <ImgWrapper>
          <input type="file" className="imgFile" />
        </ImgWrapper>
        <InputWrapper>
          <div className="option-button">
            <button>강아지껌</button>
            <button>건조간식</button>
            <button>저키/트릿</button>
            <button>캔</button>
            <button>비스킷</button>
            <button>기타</button>
          </div>
          <input type="text" placeholder="지금 이 순간을 코멘트해주세요." />
        </InputWrapper>
        <ButtonWrapper>
          <button onClick={() => navigator(ROUTE_PATH.ROOT)} color="F48C29">
            전송!
          </button>
          <br />
          <button onClick={() => navigator(ROUTE_PATH.ROOT)} color="D9D9D9">
            그냥 닫기
          </button>
        </ButtonWrapper>
      </TextWrapper>
    </>
  );
};

export default UploadSnack;

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
  background: #d9d9d9 center center no-repeat;
  border-radius: 16px;
  width: calc(100vw - 60px);
  max-width: 300px;
  height: calc(100vw - 60px);
  max-height: 300px;
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

    // 옵션 버튼 색상
    .btn {
      background-color: #fff;
      border: 1px solid #dbdee2;
      color: #404a5c;
    }
    .btn.active {
      background-color: #505bf0;
      color: #fff;
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

const ButtonWrapper = styled.div`
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
      font-size: 18px;
      margin-top: -20px;
    }

    &:last-of-type {
      background: #d9d9d9;
      border-radius: 30px;
      border: none;
      text-align: center;
      margin: 10px auto;
      width: 265px;
      height: 52px;
      font-size: 18px;
    }
  }
`;
