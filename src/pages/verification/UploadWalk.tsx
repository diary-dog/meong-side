import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useForm } from 'react-hook-form';
import ROUTE_PATH from '../../router/constants';

interface FormData {
  imageUrl: string;
  content: string;
  detailStatus: string;
}

const UploadWalk = () => {
  const navigator = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [comment, setComment] = useState('');
  const [count, setCount] = useState(0); // 닫기 버튼 클릭 횟수 카운터

  const { handleSubmit } = useForm<FormData>();

  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleSend = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCount(() => count + 1); // 닫기 버튼 클릭 시 카운터 증가
  };

  const onSubmit = async (data: FormData) => {
    const formData = {
      ...data,
      imageUrl: image || '',
      content: data.content || '',
      detailStatus: data.detailStatus || '',
    };
    console.log('전송 데이터:', JSON.stringify(formData));
    // 서버로 formData 전송 로직
    fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setShowModal(true);
  };

  const handleImageClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <TextWrapper>
        <h2>산책 인증 순간 남기기</h2>
        <ImgWrapper
          onClick={handleImageClick}
          onSubmit={handleSubmit(onSubmit)}
        >
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
                {/* 업로드 아이콘 등의 UI 표시 가능 */}
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
          <button type="submit" onClick={handleSend} color="P-BUTTON1">
            전송!
          </button>
          <br />
          <button
            onClick={() => {
              navigator(ROUTE_PATH.ROOT);
            }}
            color="INACTIVE-BUTTON"
          >
            그냥 닫기
          </button>
        </Btnwrapper>
      </TextWrapper>

      {showModal && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
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
              />
            </ModalInputWrapper>
            <CloseButton
              onClick={() => {
                navigator(ROUTE_PATH.ROOT);
                closeModal();
              }}
            >
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
