import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components';
import ROUTE_PATH from '../../../router/constants';
import { UploadVerification } from '../../../types/verification';

import * as S from './ConformVerificationContents.styled';

const submitData: UploadVerification = {
  category: 'walk',
  imageUrl:
    'https://s3-alpha-sig.figma.com/img/b559/4df2/b38e06222c7bf6072459bbd797e9d390?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPgS3HffEqnXUjN6B5lLs0KA94rXbHdDYw9IHA9fne0V1AK-VxnLMsCAbC059apjmIgSpVGJt-FhEb6ZZqGNmI~zH2rEX03hS3gGbOHB0kz4Z-kL8gQlrgApS~pc2zDZZF48oHS4i0JT0e3Ce5rq0t5S9tKnh6oZAcVJkMrriCNNfv6Z1YJqnGbkbE-49IwJfdzzspXlxkXT4~BWM~pWemuiLDM1H2ANkyxmyClJJEC0NiU-f4RtMSWVG6gKqho0krR0A-3ce12ug3butuVtSyYBy9pgrSc9vTDCvYwmR5KgZi3n6IwW6hbdV2ZXyDXjkJ0zeMaQgeuoEGKUllasFQ__',
  comment: '고양이 보이니까 달려나갔음ㅋㅋㅋ',
  verificationOption: '1시간 10분',
};

const ConformVerificationContents = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>전송 완료했어요!</S.Title>
      <S.ContentWrapper>
        {submitData.imageUrl && (
          <S.ImageWrapper
            $previewImageURL={submitData.imageUrl}
            htmlFor="imageUrl"
          ></S.ImageWrapper>
        )}
        {submitData.verificationOption && (
          <S.OptionWrapper>
            {submitData.category === 'walk' && (
              <span>아이는 얼마나 산책했나요?</span>
            )}
            <S.Option>{submitData.verificationOption}</S.Option>
          </S.OptionWrapper>
        )}
        {submitData.comment && <S.Comment>{submitData.comment}</S.Comment>}
      </S.ContentWrapper>
      <Button color="INACTIVE-BUTTON" onClick={() => navigate(ROUTE_PATH.ROOT)}>
        닫기
      </Button>
    </S.Container>
  );
};

export default ConformVerificationContents;
