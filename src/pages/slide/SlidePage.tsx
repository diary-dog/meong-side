import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

import { Layout } from '../../shared/ui';
import { LeftArrowIcon } from '../../shared/ui/Icons';
import ROUTE_PATH from '../../shared/constants/routePath';
import Spinner from '../../shared/ui/Spinner';
import { THEME } from '../../shared/styles/theme';
import Feed from '../../widgets/slide/ui/Feed';

const SlidePage = () => {
  const navigate = useNavigate();
  return (
    <Layout
      top={{
        title: '슬라이드',
        leftButton: (
          <LeftArrowIcon
            style={{ color: THEME.COLORS['P-BUTTON1'] }}
            onClick={() => navigate(`${ROUTE_PATH.GRID}/all`)}
          />
        ),
      }}
    >
      <Suspense fallback={<Spinner />}>
        <Feed />
      </Suspense>
    </Layout>
  );
};

export default SlidePage;
