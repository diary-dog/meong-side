import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '..';
import ROUTE_PATH from '../../router/constants';

const submitData = {
  verificationOption: '1시간10분',
  contents: '고양이 보이니까 달려나갔음ㅋㅋㅋ',
  imageUrl:
    'https://s3-alpha-sig.figma.com/img/b559/4df2/b38e06222c7bf6072459bbd797e9d390?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPgS3HffEqnXUjN6B5lLs0KA94rXbHdDYw9IHA9fne0V1AK-VxnLMsCAbC059apjmIgSpVGJt-FhEb6ZZqGNmI~zH2rEX03hS3gGbOHB0kz4Z-kL8gQlrgApS~pc2zDZZF48oHS4i0JT0e3Ce5rq0t5S9tKnh6oZAcVJkMrriCNNfv6Z1YJqnGbkbE-49IwJfdzzspXlxkXT4~BWM~pWemuiLDM1H2ANkyxmyClJJEC0NiU-f4RtMSWVG6gKqho0krR0A-3ce12ug3butuVtSyYBy9pgrSc9vTDCvYwmR5KgZi3n6IwW6hbdV2ZXyDXjkJ0zeMaQgeuoEGKUllasFQ__',
  type: '산책',
};

const ConformVerificationContents = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>전송 완료했어요!</Title>
      <ContentWrapper>
        {submitData.imageUrl && (
          <ImageWrapper
            $previewImageURL={submitData.imageUrl}
            htmlFor="imageUrl"
          ></ImageWrapper>
        )}
        {submitData.verificationOption && (
          <OptionWrapper>
            {submitData.type === '산책' && (
              <span>아이는 얼마나 산책했나요?</span>
            )}
            <Option>{submitData.verificationOption}</Option>
          </OptionWrapper>
        )}
        {submitData.contents && <Comment>{submitData.contents}</Comment>}
      </ContentWrapper>
      <Button color="INACTIVE-BUTTON" onClick={() => navigate(ROUTE_PATH.ROOT)}>
        닫기
      </Button>
    </Container>
  );
};

export default ConformVerificationContents;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 30px 0 30px;
  gap: 31px;
  background-color: ${({ theme }) => theme.COLORS['SECONDARY-DASH']};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT.XL};
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
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
`;

const Comment = styled.div`
  width: 100%;
  height: 87px;
  border-radius: 20px;
  padding: 14px 20px;
  line-height: 15.36px;
  text-align: left;
  border: 1px solid white;
  font-size: ${({ theme }) => theme.FONT.XS};
`;

const Option = styled.div`
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
  border-radius: 20px;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.FONT.XS};
`;
