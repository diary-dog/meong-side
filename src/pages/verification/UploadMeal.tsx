import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import styled from "styled-components";

import Modal from "../../components/Modal/Modal";

import ROUTE_PATH from "../../router/constants";

const UploadMeal = () => {
  const [tab, setTab] = useState("ture"); // 버튼 클릭시 버튼 색상 변경 -> 추후변경

  const [isOpenModal, setOpenModal] = useState(false); // 모달

  const onClickToggleModal = useCallback(() => {
    // 모달 토글
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const navigator = useNavigate();

  return (
    <>
      <TextWrapper>
        <h2>식사 인증 순간 남기기</h2>
        <ImgWrapper>
          <input type="file" className="imgFile" />
        </ImgWrapper>
        <InputWrapper>
          <div
            className={`option-button btn ${tab === "curr" ? "active" : ""}`}
          >
            <button onClick={() => setTab("curr")}>다 먹었어요</button>
            <button onClick={() => setTab("curr")}>밥만 먹었어요</button>
            <button onClick={() => setTab("curr")}>거의 안먹었어요</button>
          </div>
          <input type="text" placeholder="지금 이 순간을 코멘트해주세요." />
        </InputWrapper>
        <ButtonWrapper>
          <button onClick={() => navigator(ROUTE_PATH.ROOT)}>전송!</button>
          <br />
          <button onClick={() => navigator(ROUTE_PATH.ROOT)}>그냥 닫기</button>
        </ButtonWrapper>
      </TextWrapper>

      {/* 모달창 */}
      <Main>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <Title>식사 인증 순간 남기기</Title>
          </Modal>
        )}
        <DialogButton onClick={onClickToggleModal}>전송</DialogButton>
      </Main>
    </>
  );
};

export default UploadMeal;

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

// 모달창 스타일링
const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: #d9d9d9;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;
