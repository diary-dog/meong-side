import { Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '../../shared/constants/routePath';
import { Layout } from '../../shared/ui';
import { SlideIcon } from '../../shared/ui/Icons';
import Spinner from '../../shared/ui/Spinner';
import { GridLayout, SortButton, InfiniteGrid } from '../../widgets/grid';
import { SortType } from '../../entities/verification/verification.dto';

import * as S from './GridByUserPage.styled';
import { useUploaderGridVerifications } from '../../entities/verification';

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

const GridByUserPage = () => {
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
export default GridByUserPage;
