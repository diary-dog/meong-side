import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  gap: 27px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT.LG};
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

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;
`;

export const CommentInput = styled.textarea`
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
