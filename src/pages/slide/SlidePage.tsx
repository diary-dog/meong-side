import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

import { Layout } from '../../shared/ui';
import { GridIcon } from '../../shared/ui/Icons';
import ROUTE_PATH from '../../shared/constants/routePath';
import Slide from '../../widgets/slide/ui/Slide';
import Spinner from '../../shared/ui/Spinner';

const SlidePage = () => {
  const navigate = useNavigate();
  return (
    <Layout
      top={{
        title: '슬라이드',
        rightButton: (
          <GridIcon onClick={() => navigate(`${ROUTE_PATH.GRID}/all`)} />
        ),
      }}
    >
      <Suspense fallback={<Spinner />}>
        <Slide />
      </Suspense>
    </Layout>
  );
};

export default SlidePage;
