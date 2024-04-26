import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import { RightArrowIcon } from '../../../components/Icons';
import { useGridVerificationsForUploader } from '../hooks/queries';
import Spinner from '../../../components/Spinner';

import * as S from './UploaderTypeGrid.styled';

const UploaderTypeGridVerifications = () => {
  const navigate = useNavigate();
  const gridByUploader = useGridVerificationsForUploader();

  return gridByUploader.map((verification) => (
    <S.UploaderSection key={verification.author.id}>
      <S.Uploader onClick={() => navigate(verification.author.id)}>
        <span>{verification.author.name}</span>
        <RightArrowIcon />
      </S.Uploader>
      <S.GridWrapper>
        {verification.items.map((item) => (
          <img key={item.id} src={item.imageUrl} />
        ))}
      </S.GridWrapper>
    </S.UploaderSection>
  ));
};

const UploaderTypeGrid = () => {
  return (
    <S.GridContainer>
      <Suspense fallback={<Spinner size={100} />}>
        <UploaderTypeGridVerifications />
      </Suspense>
    </S.GridContainer>
  );
};
export default UploaderTypeGrid;
