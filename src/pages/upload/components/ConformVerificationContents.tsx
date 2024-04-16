import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components';
import ROUTE_PATH from '../../../router/constants';
import type { UploadVerificationContents } from '../../../types/verification';

import * as S from './ConformVerificationContents.styled';

const ConformVerificationContents = ({
  uploadedData,
}: {
  uploadedData?: UploadVerificationContents;
}) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>전송 완료했어요!</S.Title>
      <S.ContentWrapper>
        {uploadedData?.imageUrl && (
          <S.ImageWrapper
            $previewImageURL={uploadedData.imageUrl}
            htmlFor="imageUrl"
          ></S.ImageWrapper>
        )}
        {uploadedData?.verificationOption && (
          <S.OptionWrapper>
            {uploadedData?.category === 'walk' && (
              <span>아이는 얼마나 산책했나요?</span>
            )}
            <S.Option>{uploadedData?.verificationOption}</S.Option>
          </S.OptionWrapper>
        )}
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
