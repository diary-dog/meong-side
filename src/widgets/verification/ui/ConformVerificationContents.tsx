import { useNavigate } from 'react-router-dom';
import { useWatch } from 'react-hook-form';

import { Button } from '../../../shared/ui';
import ROUTE_PATH from '../../../shared/constants/routePath';
import { VERIFICATION } from '../../../shared/constants/verification';
import getPreviewImageURL from '../../../shared/lib/getPreviewImageURL';
import {
  getDisplayOption,
  getVerificationMetadata,
  getVerificationDetail,
  isExistTimeOption,
} from '../../../shared/lib/getVerificationInfo';
import { UploadVerificationForm } from '../../../shared/types/verification';

import * as S from './ConformVerificationContents.styled';

const ConformVerificationContents = ({ category }: { category: string }) => {
  const navigate = useNavigate();
  const uploadedData = useWatch<UploadVerificationForm>();
  const previewImageURL = getPreviewImageURL(uploadedData.image ?? '');
  const CATEGORY = getVerificationMetadata(category).type;

  return (
    <S.Container>
      <S.Title>전송 완료했어요!</S.Title>
      <S.ContentWrapper>
        {previewImageURL && (
          <S.ImageWrapper
            $previewImageURL={previewImageURL}
            htmlFor="imageUrl"
          ></S.ImageWrapper>
        )}
        <S.OptionWrapper>
          {CATEGORY === VERIFICATION.WALK.type &&
            isExistTimeOption(uploadedData.walkDetail) && (
              <>
                <span>아이는 얼마나 산책했나요?</span>
                <S.Option>{getDisplayOption(uploadedData.walkDetail)}</S.Option>
              </>
            )}
          {uploadedData.verificationDetail && (
            <S.Option>
              {getDisplayOption(
                getVerificationDetail(CATEGORY, uploadedData.verificationDetail)
              )}
            </S.Option>
          )}
        </S.OptionWrapper>
        {uploadedData?.comment && (
          <S.Comment>{uploadedData?.comment}</S.Comment>
        )}
      </S.ContentWrapper>
      <Button color="INACTIVE-BUTTON" onClick={() => navigate(ROUTE_PATH.ROOT)}>
        닫기
      </Button>
    </S.Container>
  );
};

export default ConformVerificationContents;
