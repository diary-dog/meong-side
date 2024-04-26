import { Suspense } from 'react';

import Spinner from '../../../components/Spinner';
import { useInfiniteVerificationsForGrid } from '../hooks/queries';
import InfiniteGrid from './InfiniteGrid';
import { useLocation } from 'react-router-dom';
import SortButton from './SortButton';
import { SortType } from '../../../types/verification';

import * as S from './AllTypeGrid.styled';

const AllTypeGridVerifications = () => {
  const { data, targetItemRef, isFetchingNextPage } =
    useInfiniteVerificationsForGrid('ascending');

  return (
    <InfiniteGrid
      verificationsForGrid={data}
      targetItemRef={targetItemRef}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

const AllTypeGrid = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sortType = searchParams.get('sortType') || 'ascending';

  return (
    <S.Container>
      <SortButton type={sortType as SortType} />
      <S.Wrapper>
        <Suspense
          fallback={
            <Spinner size={100} style={{ gridArea: '1 / 1 / 2 / 5' }} />
          }
        >
          <AllTypeGridVerifications />
        </Suspense>
      </S.Wrapper>
    </S.Container>
  );
};
export default AllTypeGrid;
