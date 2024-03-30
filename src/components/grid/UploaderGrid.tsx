import { useNavigate } from 'react-router-dom';

import { RightArrowIcon } from '../Icons';
import { mockData } from '../../utils/mockData';

import * as S from './UploderGrid.styled';

const UploaderGrid = () => {
  const userId = 'test';
  const navigate = useNavigate();
  return (
    <S.GridContainer>
      <S.UploaderSection>
        <S.Uploader onClick={() => navigate(userId)}>
          <span>둘째딸</span>
          <RightArrowIcon />
        </S.Uploader>
        <S.GridWrapper>
          {mockData.slice(0, 8).map((image) => (
            <img key={image.createdAt} src={image.imageUrl} />
          ))}
        </S.GridWrapper>
      </S.UploaderSection>
      <S.UploaderSection>
        <S.Uploader onClick={() => navigate(userId)}>
          <span>막내</span>
          <RightArrowIcon />
        </S.Uploader>
        <S.GridWrapper>
          {mockData.slice(0, 8).map((image) => (
            <img key={image.createdAt} src={image.imageUrl} />
          ))}
        </S.GridWrapper>
      </S.UploaderSection>
      <S.UploaderSection>
        <S.Uploader onClick={() => navigate(userId)}>
          <span>막내</span>
          <RightArrowIcon />
        </S.Uploader>
        <S.GridWrapper>
          {mockData.slice(0, 8).map((image) => (
            <img key={image.createdAt} src={image.imageUrl} />
          ))}
        </S.GridWrapper>
      </S.UploaderSection>
      <S.UploaderSection>
        <S.Uploader onClick={() => navigate(userId)}>
          <span>막내</span>
          <RightArrowIcon />
        </S.Uploader>
        <S.GridWrapper>
          {mockData.slice(0, 8).map((image) => (
            <img key={image.createdAt} src={image.imageUrl} />
          ))}
        </S.GridWrapper>
      </S.UploaderSection>
      <S.UploaderSection>
        <S.Uploader>
          <span>막내</span>
          <RightArrowIcon />
        </S.Uploader>
        <S.GridWrapper>
          {mockData.slice(0, 8).map((image) => (
            <img key={image.createdAt} src={image.imageUrl} />
          ))}
        </S.GridWrapper>
      </S.UploaderSection>
    </S.GridContainer>
  );
};
export default UploaderGrid;
