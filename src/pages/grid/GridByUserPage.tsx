import { Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '@/shared/constants/routePath';
import { SlideIcon } from '@/widgets/common/Icons';
import Spinner from '@/widgets/common/Spinner';
import Layout from '@/widgets/common/Layout';
import { SortType } from '@/entities/verification/verification.dto';
import useUploaderGridVerifications from '@/entities/verification/queries/useUploaderGridVerifications';
import SortButton from '@/entities/verification/ui/grid/SortButton';
import InfiniteGrid from '@/entities/verification/ui/grid/InfiniteGrid';
import GridLayout from '@/entities/verification/ui/grid/GridLayout';

import * as S from './GridByUserPage.styled';

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
