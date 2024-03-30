import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextWrapper,
  ImgWrapper,
  InputWrapper,
  ButtonWrapper,
  ModalOverlay,
  ModalContent,
  ModalInputWrapper,
  CommentInput,
  ModalImage,
  CloseButton,
} from './UploadEtc.styled';
import { useForm } from 'react-hook-form';
import ROUTE_PATH from '../../router/constants';

interface FormData {
  imageUrl: string;
  content: string;
  detailStatus: string;
}

const UploadEtc = () => {
  const navigator = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  const [count, setCount] = useState(0); // 닫기 버튼 클릭 횟수 카운터
  const { handleSubmit } = useForm<FormData>();

  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleSend = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCount(() => count + 1);
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

  return (
    <>
      <TextWrapper>
        <h2>순간 포착 일상 남기기</h2>
        <ImgWrapper
          onClick={handleImageClick}
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <button type="submit" onClick={handleSend} color="P-BUTTON1">
            전송!
          </button>
          <br />
          <button onClick={closeModal} color="INACTIVE-BUTTON">
            그냥 닫기
          </button>
        </ButtonWrapper>
      </TextWrapper>

      {/* 모달창 */}
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
              <CommentInput
                type="text"
                className="comment-input"
                value={comment}
                readOnly
              />{' '}
              {/* 사용자가 입력한 데이터 */}
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

export default UploadEtc;
