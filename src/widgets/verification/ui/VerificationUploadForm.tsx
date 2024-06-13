import { useFormContext, useWatch } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '../../../shared/constants/routePath';
import { CameraIcon } from '../../../shared/ui/Icons';
import VerificationOption from './VerificationOption';
import { Button } from '../../../shared/ui';
import { getVerificationTitle } from '../../../shared/lib/getVerificationInfo';
import type { UploadVerificationForm } from '../../../shared/types/verification';

import * as S from './VerificationUploadForm.styled';

const VerificationUploadForm = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const { register, watch, control, setValue } =
    useFormContext<UploadVerificationForm>();

  const previewImage = useWatch({
    name: 'imageUrl',
    control,
  });
  const previewImageURL =
    previewImage && previewImage[0] ? URL.createObjectURL(previewImage[0]) : '';
  return (
    <S.Container>
      <S.Title>{getVerificationTitle(category!)} 인증 순간 남기기</S.Title>
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
          category={category!}
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <S.CommentInput
          placeholder="지금 이 순간을 코멘트해주세요."
          {...register('comment')}
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
