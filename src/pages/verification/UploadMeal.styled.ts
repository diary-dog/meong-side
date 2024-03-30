import styled from 'styled-components';

export const TextWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  // gap: 38px;
`;

export const ImgWrapper = styled.div`
  margin: 20px auto 0;
  border: 1px solid #eee;
  background: #d9d9d9 center center no-repeat;
  border-radius: 16px;
  width: calc(100vw - 60px);
  max-width: 300px;
  height: calc(100vw - 60px);
  max-height: 300px;

  .preview {
    margin: -2px auto 0;
    border-radius: 16px;
    width: calc(100vw - 60px);
    max-width: 300px;
    height: calc(100vw - 60px);
    max-height: 300px;
    marigin-top: 20px;

    .svgimg {
      display: block;
      margin: 0 auto;
    }
  }
`;

export const InputWrapper = styled.div`
  margin-top: 40px;
  margin: 0 auto;
  width: calc(100% - 60px);
  font-size: 12px;

  input[type='text'] {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 6px 10px;
    margin-bottom: 10px;
  }

  .time-input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 6px 10px;

    label {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
    }

    input[type='text'] {
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
    font-size: 12px;

    button {
      width: auto;
      padding: 4px 8px;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 14px;
      margin: 0 12px;
      height: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      margin-top: 10px;
    }
  }
`;

// 스낵 선택 시 이벤트 스타일링
export const SnackButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 4px;
  background-color: ${(props) => (props.$active ? '#68CFDE' : 'white')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div`
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
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #f48c29;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 375px;
  height: 667px;
`;

export const ModalInputWrapper = styled.div`
  margin: 0 auto;
  width: calc(100% - 30px);

    input[type="text"] {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 3px;
    margin-bottom: 10px;
    font-size: 12px;
  }

  .modal-time-input {
  width: 100%;
  border-radius: 25px;
  padding: 4px;
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 12px;

  label {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 12px;
  }
  
  input[type="text"] {
    width: 36px;
    height: 100%;
    background: 1px solid #ddd;
    border-radius: 25px;
    text-align: center;
    border: none;
    background: transparent;
    color: #333;
    margin: 0;
    padding: 0;
    font-size: 12px;
`;

export const CommentInput = styled.input`
  border: 1px solid #000;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 12px;

  width: 100%;
  height: 100%;
  background: 1px solid #ddd;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: #333;
  font-size: 12px;
`;

// 모달창 이미지 프리뷰 스타일링
export const ModalImage = styled.div`
  margin: 20px auto 0;
  background: #d9d9d9 center center no-repeat;
  border-radius: 16px;
  width: calc(100vw - 60px);
  max-width: 300px;
  height: calc(100vw - 60px);
  max-height: 300px;
  margin-top: 20px;

  .modalpreview {
    border-radius: 16px;
    width: calc(100vw - 60px);
    max-width: 300px;
    height: calc(100vw - 60px);
    max-height: 300px;
    object-fit: cover;
  }
`;

// 모달창 닫기 버튼 스타일링
export const CloseButton = styled.div`
  background-color: #d9d9d9;
  padding: 13px;
  border-radius: 30px;
  text-align: center;
  width: 265px;
  height: 52px;
  margin: 10px auto;
  margin-bottom: 20px;
  cursor: pointer;

  .close-button {
    font-size: 18px;
    text-align: center;
  }
`;

// 모달창 버튼 선택 조회
export const SelectedSnackButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 8px 16px;
  background-color: #68cfde;
  color: black;
  border-radius: 20px;
  border: none;
  cursor: default;

  &:disabled {
    opacity: 0.7;
  }
`;
