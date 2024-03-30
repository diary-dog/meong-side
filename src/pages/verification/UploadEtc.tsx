import { useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import ROUTE_PATH from '../../router/constants';

const UploadEtc = () => {
  const navigator = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');

  const [image, setImage] = useState<string | ArrayBuffer | null>(null); // 이미지 미리보기

  const handleSend = () => {
    setShowModal(true); // 모달창 오픈
  };

  const closeModal = () => {
    setShowModal(false); // 모달창 닫기
  };

  const handleImageClick = () => {
    // 파일 선택을 유도하기 위해 input 요소 클릭
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  // 이미지 미리보기
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    // 사용자가 파일을 선택하면 handleImageChange함수 호출
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader(); // FileReader를 사용하여 이미지 파일을 읽음
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 데이터 전송 로직

    // 데이터 전송 후에 입력된 데이터 초기화
    // setComment('');
    // setHour('');
    // setMinute('');
    // setImage(null);
  };

  return (
    <>
      <TextWrapper>
        <h2>순간 포착 일상 남기기</h2>
        <form onSubmit={handleSubmit}>
          <ImgWrapper onClick={handleImageClick}>
            {/* 이미지 데이터의 URL을 얻어와 <img>태그의 src속성에 설정하여 이미지 미리보기 */}
            <input
              id="fileInput"
              type="file"
              className="imgFile"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <div className="uploadArea">
              {image ? (
                <img
                  src={image.toString()}
                  alt="imgPreview"
                  className="preview"
                />
              ) : (
                <div className="uploadText">
                  {/* <CameraIcon className="svg" /> */}
                </div>
              )}
            </div>
          </ImgWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="지금 이 순간을 코멘트해주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </InputWrapper>
          <ButtonWrapper>
            <button onClick={() => handleSend()} color="P-BUTTON1">
              전송!
            </button>
            <br />
            <button
              onClick={() => navigator(ROUTE_PATH.ROOT)}
              color="INACTIVE-BUTTON"
            >
              그냥 닫기
            </button>
          </ButtonWrapper>
        </form>
      </TextWrapper>

      {/* 모달창 */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>전송 완료했어요!</h2>
            <ModalImage>
              {image && (
                <img
                  src={image.toString()}
                  alt="modalimgPreview"
                  className="modalpreview"
                />
              )}
            </ModalImage>
            <ModalInputWrapper>
              <div className="modal-time-input"></div>
              <CommentInput
                type="text"
                className="comment-input"
                value={comment}
                readOnly
              />{' '}
              {/* 사용자가 입력한 데이터 */}
            </ModalInputWrapper>
            <CloseButton onClick={closeModal}>
              <button className="close-button" color="P-BUTTON1">
                닫기
              </button>
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
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
`;

const InputWrapper = styled.div`
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
const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
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

  input[type='text'] {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 6px;
    margin-bottom: 10px;
    font-size: 12px;
    margin-top: 20px;
  }
`;

const CommentInput = styled.input`
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
const CloseButton = styled.div`
  background-color: #d9d9d9;
  padding: 13px;
  border-radius: 30px;
  text-align: center;
  width: 265px;
  height: 52px;
  margin: 10px auto;
  cursor: pointer;

  .close-button {
    font-size: 18px;
    text-align: center;
  }
`;
