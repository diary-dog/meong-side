import { useState, ChangeEvent, FormEvent } from 'react';
import {
  TextWrapper,
  ImgWrapper,
  InputWrapper,
  Btnwrapper,
  ModalOverlay,
  ModalContent,
  ModalInputWrapper,
  CommentInput,
  ModalImage,
  CloseButton,
} from './UploadWalk.styled';
// import { CameraIcon } from '../../components/Icons';
import { useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../../router/constants';

const UploadWalk = () => {
  const navigator = useNavigate();

  const [showModal, setShowModal] = useState(false); // 모달창 오픈
  const [hour, setHour] = useState(''); // 입력한 시간 출력
  const [minute, setMinute] = useState(''); // 입력한 분 출력
  const [comment, setComment] = useState(''); // 입력한 코멘트 데이터 출력

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
        <h2>산책 인증 순간 남기기</h2>
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
            <div className="time-input">
              <label>
                <span>아이는 얼마나 산책했나요?</span>
                <input
                  type="text"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                />
                <span>시</span>
                <input
                  type="text"
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                />
                <span>분</span>
              </label>
            </div>
            <input
              type="text"
              placeholder="지금 이 순간을 코멘트해주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </InputWrapper>
          <Btnwrapper>
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
          </Btnwrapper>
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
              <div className="modal-time-input">
                <label>
                  <span>아이는 얼마나 산책했나요?</span>
                  <input type="text" value={hour} readOnly />
                  <span>시</span> {/* 입력한 시간 출력 */}
                  <input type="text" value={minute} readOnly />
                  <span>분</span> {/* 입력한 시간 출력 */}
                </label>
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

export default UploadWalk;
