import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components';
import { GridIcon } from '../../components/Icons';
import ROUTE_PATH from '../../router/constants';
import Slide from './components/Slide';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner';

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
