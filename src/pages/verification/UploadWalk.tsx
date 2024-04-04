import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ROUTE_PATH from '../../router/constants';
import { Button } from '../../components';
import { useForm, useWatch } from 'react-hook-form';
import { CameraIcon } from '../../components/Icons';

interface UploadVerification {
  imageUrl?: string;
  comment?: string;
}
interface WalkOption extends UploadVerification {
  hour?: string;
  minutes?: string;
}

const UploadWalk = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm({ mode: 'onSubmit' });

  const previewImage = useWatch({
    name: 'imageUrl',
    control,
  });
  const previewImageURL =
    previewImage && previewImage[0] ? URL.createObjectURL(previewImage[0]) : '';

  const onSubmit = (data: WalkOption) => {
    console.log(data);
    navigate(ROUTE_PATH.ROOT);
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>산책 인증 순간 남기기</Title>
      <InputContainer>
        <ImageWrapper $previewImageURL={previewImageURL} htmlFor="imageUrl">
          <input
            type="file"
            id="imageUrl"
            accept="image/*"
            {...register('imageUrl')}
          />
          <label className="border" htmlFor="imageUrl">
            <CameraIcon className="svg" />
          </label>
        </ImageWrapper>
        <VerificationOption id="hour" htmlFor="hour">
          <span>아이는 얼마나 산책했나요?</span>
          <input id="hour" type="number" {...register('hour')} />
          <span>시</span>
          <input id="minutes" type="number" {...register('minutes')} />
          <span>분</span>
        </VerificationOption>
        <CommentInput
          placeholder="지금 이 순간을 코멘트해주세요."
          {...register('comments')}
        />
      </InputContainer>
      <Button type="submit" color="P-BUTTON1">
        전송!
      </Button>
      <Button color="INACTIVE-BUTTON" onClick={() => navigate(ROUTE_PATH.ROOT)}>
        그냥 닫기
      </Button>
    </Container>
  );
};

export default UploadWalk;

const Container = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  gap: 27px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT.LG};
  font-weight: 400;
  line-height: 25.6px;
`;

const ImageWrapper = styled.label<{ $previewImageURL: string }>`
  background: ${({ theme }) => theme.COLORS['INACTIVE-BUTTON']};
  border-radius: 16px;
  width: calc(100vw - 60px);
  height: calc(100vw - 60px);
  max-width: 315px;
  max-height: 315px;
  position: relative;
  background-image: ${({ $previewImageURL }) =>
    $previewImageURL ? `url(${$previewImageURL})` : ''};
  background-position: center;
  background-size: cover;

  #imageUrl {
    display: none;
  }
  label {
    cursor: pointer;
  }

  .border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 85px;
    background-color: white;
    border-radius: 100%;
    cursor: pointer;
    visibility: ${({ $previewImageURL }) =>
      $previewImageURL ? 'hidden' : 'visible'};
  }
  .svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
`;
const VerificationOption = styled.label`
  display: flex;
  width: 100%;
  max-height: 47px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px 19px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  font-size: ${({ theme }) => theme.FONT.XS};
  input {
    width: 25px;
    height: 26px;
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS['INACTIVE-BUTTON']};
    text-align: center;
  }
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 87px;
  border-radius: 20px;
  padding: 14px 20px;
  line-height: 15.36px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  font-size: ${({ theme }) => theme.FONT.XS};
  ::placeholder {
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-IA']};
  }
`;
