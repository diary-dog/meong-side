import { mockData } from '../../utils/mockData';
import { SortButton } from '.';
import { Sort } from '../../pages/Grid';

import * as S from './AllGrid.styled';

const AllGrid = ({ sortType }: { sortType: Sort }) => {
  return (
    <>
      <SortButton type={sortType} />
      <S.GridContainer>
        <S.GridWrapper>
          {sortType === 'descending'
            ? mockData
                .sort((a, b) => b.createdAt - a.createdAt)
                .map((image) => (
                  <img key={image.createdAt} src={image.imageUrl} />
                ))
            : mockData
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((image) => (
                  <img key={image.createdAt} src={image.imageUrl} />
                ))}
        </S.GridWrapper>
      </S.GridContainer>
    </>
  );
};
export default AllGrid;
