import styled from 'styled-components';

export const Container = styled.div`
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

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT.XL};
  font-weight: 400;
  line-height: 25.6px;
`;

export const ImageWrapper = styled.label<{ $previewImageURL: string }>`
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

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
`;

export const Comment = styled.div`
  width: 100%;
  height: 87px;
  border-radius: 20px;
  padding: 14px 20px;
  line-height: 15.36px;
  text-align: left;
  border: 1px solid white;
  font-size: ${({ theme }) => theme.FONT.XS};
`;

export const Option = styled.div`
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.COLORS['P-BUTTON2']};
  border-radius: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.FONT.XS};
`;
