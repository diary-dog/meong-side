import { mockData } from '../../utils/mockData';
import { SortButton } from '.';
import { Sort } from '../../pages/grid/Grid';

import useControlImageModal from '../../hooks/useControlImageModal';
import ImageModal from './ImageModal';

import * as S from './AllGrid.styled';

const AllGrid = ({ sortType }: { sortType: Sort }) => {
  const { clickedImage, openImageModal, closeImageModal } =
    useControlImageModal();

  return (
    <>
      <SortButton type={sortType} />
      <S.GridContainer>
        <S.GridWrapper>
          {sortType === 'descending'
            ? mockData
                .sort((a, b) => b.createdAt - a.createdAt)
                .map((image) => (
                  <img
                    onClick={() => openImageModal({ imageUrl: image.imageUrl })}
                    key={image.createdAt}
                    src={image.imageUrl}
                  />
                ))
            : mockData
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((image) => (
                  <img
                    onClick={() => openImageModal({ imageUrl: image.imageUrl })}
                    key={image.createdAt}
                    src={image.imageUrl}
                  />
                ))}
        </S.GridWrapper>
      </S.GridContainer>
      {clickedImage.isClicked && (
        <ImageModal onClose={closeImageModal}>
          <S.ClickedImage src={clickedImage.imageUrl} />
        </ImageModal>
      )}
    </>
  );
};
export default AllGrid;
