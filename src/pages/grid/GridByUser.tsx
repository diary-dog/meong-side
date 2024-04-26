import { Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useUploaderGridVerifications } from './hooks/queries';
import ROUTE_PATH from '../../router/constants';
import { Layout } from '../../components';
import { GridLayout, SortButton } from './components';
import { SlideIcon } from '../../components/Icons';
import Spinner from '../../components/Spinner';
import InfiniteGrid from './components/InfiniteGrid';
import { SortType } from '../../types/verification';

import * as S from './GridByUser.styled';

const UploaderGridVerifications = () => {
  const { userId } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sortType = (searchParams.get('sortType') as SortType) ?? 'ascending';

  const { data, isFetchingNextPage, targetItemRef } =
    useUploaderGridVerifications({
      uploaderId: userId as string,
      sort: sortType,
    });

  return (
    <>
      <S.Top>
        <h3>{data[0].author.name}</h3>
        <SortButton type={sortType as SortType} />
      </S.Top>
      <S.Wrapper>
        <InfiniteGrid
          verificationsForGrid={data}
          isFetchingNextPage={isFetchingNextPage}
          targetItemRef={targetItemRef}
        />
      </S.Wrapper>
    </>
  );
};

const GridByUser = () => {
  const navigate = useNavigate();

  return (
    <Layout
      top={{
        title: '그리드',
        rightButton: <SlideIcon onClick={() => navigate(ROUTE_PATH.SLIDE)} />,
      }}
    >
      <GridLayout>
        <Suspense
          fallback={
            <Spinner size={100} style={{ gridArea: '1 / 1 / 2 / 5' }} />
          }
        >
          <UploaderGridVerifications />
        </Suspense>
      </GridLayout>
    </Layout>
  );
};
export default GridByUser;
