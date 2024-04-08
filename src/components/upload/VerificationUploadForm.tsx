import { useForm, useWatch } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '../../router/constants';
import { CameraIcon } from '../Icons';
import VerificationOption from './VerificationOption';
import { Button } from '..';
import { getVerificationType } from '../../utils/getVerificationType';

import * as S from './VerificationUploadForm.styled';

interface UploadVerificationDefault {
  imageUrl?: string;
  comment?: string;
}
interface WalkOption extends UploadVerificationDefault {
  hour?: string;
  minutes?: string;
}

const VerificationUploadForm = ({ onNext }: { onNext: () => void }) => {
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
    onNext();
  };
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.Title>{getVerificationType(type!)} 인증 순간 남기기</S.Title>
      <S.InputContainer>
        <S.ImageWrapper $previewImageURL={previewImageURL} htmlFor="imageUrl">
          <input
            type="file"
            id="imageUrl"
            accept="image/*"
            {...register('imageUrl')}
          />
          <div className="border">
            <CameraIcon className="svg" width={87.8} height={79.2} />
          </div>
        </S.ImageWrapper>
        <VerificationOption
          type={type!}
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <S.CommentInput
          placeholder="지금 이 순간을 코멘트해주세요."
          {...register('comments')}
        />
      </S.InputContainer>
      <Button type="submit" color="P-BUTTON1">
        전송!
      </Button>
      <Button color="INACTIVE-BUTTON" onClick={() => navigate(ROUTE_PATH.ROOT)}>
        그냥 닫기
      </Button>
    </S.Container>
  );
};

export default VerificationUploadForm;
