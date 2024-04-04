import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ROUTE_PATH from '../../router/constants';
import { Button } from '../../components';
import { useForm, useWatch } from 'react-hook-form';
import { CameraIcon } from '../../components/Icons';
import { getVerificationType } from '../../utils/getVerificationType';

import VerificationOption from '../../components/upload/VerificationOption';

interface UploadVerificationDefault {
  imageUrl?: string;
  comment?: string;
}
interface WalkOption extends UploadVerificationDefault {
  hour?: string;
  minutes?: string;
}

const UploadVerification = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, control, setValue } = useForm({
    mode: 'onSubmit',
  });

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
      <Title>{getVerificationType(type!)} 인증 순간 남기기</Title>
      <InputContainer>
        <ImageWrapper $previewImageURL={previewImageURL} htmlFor="imageUrl">
          <input
            type="file"
            id="imageUrl"
            accept="image/*"
            {...register('imageUrl')}
          />
          <div className="border">
            <CameraIcon className="svg" width={87.8} height={79.2} />
          </div>
        </ImageWrapper>
        <VerificationOption
          type={type!}
          register={register}
          watch={watch}
          setValue={setValue}
        />
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

export default UploadVerification;

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
  cursor: pointer;

  #imageUrl {
    display: none;
  }
  .border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 145px;
    height: 145px;
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
