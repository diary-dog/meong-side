import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextWrapper,
  ImgWrapper,
  InputWrapper,
  SnackButton,
  ButtonWrapper,
  ModalOverlay,
  ModalContent,
  ModalInputWrapper,
  CommentInput,
  ModalImage,
  CloseButton,
  SelectedSnackButton,
} from './UploadSnack.styled';
import { useForm } from 'react-hook-form';
import ROUTE_PATH from '../../router/constants';

interface FormData {
  imageUrl: string;
  content: string;
  detailStatus: string;
}

const UploadSnack = () => {
  const navigator = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  const [activeSnack, setActiveSnack] = useState<string | null>(null);
  const [selectedSnack, setSelectedSnack] = useState('');
  const [count, setCount] = useState(0);
  const { handleSubmit } = useForm<FormData>();

  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleSend = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCount(() => count + 1);
  };

  const handleImageClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSnackClick = (snackType: string) => {
    setActiveSnack(snackType);
    setSelectedSnack(snackType);
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

  const onSubmit = (data: FormData) => {
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
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <TextWrapper>
        <h2>간식 인증 순간 남기기</h2>
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
                {/* <CameraIcon className="svg" /> */}
              </div>
            )}
          </div>
        </ImgWrapper>
        <InputWrapper>
          <div className="option-button">
            {['강아지껌', '건조간식', '저키/트릿', '캔', '비스킷', '기타'].map(
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
          <button type="submit" onClick={handleSend} color="P-BUTTON1">
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
      </TextWrapper>

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
                  {selectedSnack}
                </SelectedSnackButton>
              </div>
              <CommentInput
                type="text"
                className="comment-input"
                value={comment}
                readOnly
              />
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

export default UploadSnack;
