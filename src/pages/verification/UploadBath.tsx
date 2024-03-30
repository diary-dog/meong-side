import { useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import ROUTE_PATH from '../../router/constants';

const UploadBath = () => {
  const navigator = useNavigate();

  const [showModal, setShowModal] = useState(false); // 모달창 오픈
  const [comment, setComment] = useState(''); // 입력한 코멘트 데이터 출력
  const [activeSnack, setActiveSnack] = useState(null); // 버튼 클릭 시
  const [selectedSnack, setSelectedSnack] = useState('');

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

  const handleSnackClick = (snackType) => {
    setActiveSnack(snackType); // 선택된 스낵 유형으로 상태 업데이트
    setSelectedSnack(snackType); // 모달창에서 보여줄 선택된 스낵 저장
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
        <h2>식사 인증 순간 남기기</h2>
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
            <div className="option-button">
              {['전신목욕했어요', '반만닦았어요', '발만 닦았어요'].map(
                (snackType) => (
                  <SnackButton
                    key={snackType}
                    $active={activeSnack === snackType}
                    onClick={() => handleSnackClick(snackType)}
                  >
                    {snackType}
                  </SnackButton>
                )
              )}
            </div>

            <input
              type="text"
              placeholder="지금 이 순간을 코멘트해주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </InputWrapper>
          <ButtonWrapper>
            <button
              type="submit"
              onClick={() => handleSend()}
              color="P-BUTTON1"
            >
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
              <div className="modal-snack-buttons">
                <SelectedSnackButton disabled>
                  {selectedSnack} {/* 모달창에서 선택된 스낵을 보여줌 */}
                </SelectedSnackButton>
              </div>
              <CommentInput
                type="text"
                className="comment-input"
                value={comment}
                readOnly
              />{' '}
              {/* 입력한 데이터 출력 */}
            </ModalInputWrapper>
            <CloseButton onClick={closeModal}>
              <button className="close-button" color="INACTIVE-BUTTON">
                닫기
              </button>
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default UploadBath;

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

  .time-input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 6px 10px;
    margin-bottom: 10px;

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
      margin: 0 2px;
      height: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
  }
`;

// 스낵 선택 시 이벤트 스타일링
const SnackButton = styled.button`
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
const SelectedSnackButton = styled.button`
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
