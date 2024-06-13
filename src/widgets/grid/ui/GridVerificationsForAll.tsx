import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import InfiniteGrid from './InfiniteGrid';
import SortButton from './SortButton';
import { SortType } from '../../../shared/types/verification';
import Spinner from '../../../shared/ui/Spinner';
import { useInfiniteVerificationsForGrid } from '../../../entities/verification';

import * as S from './GridVerificationsForAll.styled';

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

const GridVerificationsForAll = () => {
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
export default GridVerificationsForAll;
