import { useFormContext, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../../../shared/constants/routePath';
import { CameraIcon } from '../../../shared/ui/Icons';
import VerificationOption from './VerificationOption';
import { Button } from '../../../shared/ui';
import { getVerificationMetadata } from '../../../entities/verification/libs/getVerificationInfo';
import type { UploadVerificationForm } from '../../../entities/verification/verification.dto';
import getPreviewImageURL from '../../../shared/lib/getPreviewImageURL';

import * as S from './VerificationUploadForm.styled';

const VerificationUploadForm = ({ category }: { category: string }) => {
  const navigate = useNavigate();

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<UploadVerificationForm>();

  const previewImage = useWatch({
    name: 'image',
    control,
  });
  const previewImageURL = getPreviewImageURL(previewImage);
  return (
    <S.Container>
      <S.Title>
        {getVerificationMetadata(category!).title} 인증 순간 남기기
      </S.Title>
      <S.InputContainer>
        <S.ImageWrapper $previewImageURL={previewImageURL} htmlFor="image">
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register('image')}
          />
          <div className="border">
            <CameraIcon className="svg" width={87.8} height={79.2} />
          </div>
        </S.ImageWrapper>
        <VerificationOption category={category!} />
        <S.CommentInput
          placeholder="지금 이 순간을 코멘트해주세요."
          {...register('comment')}
        />
      </S.InputContainer>
      {errors.root && <span id="error-message">{errors.root.message}</span>}
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
