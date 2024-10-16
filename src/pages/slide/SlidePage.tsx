import { Suspense } from 'react';

import { Layout } from '../../shared/ui';
import Spinner from '../../shared/ui/Spinner';
import Feed from '../../widgets/slide/ui/Feed';

const SlidePage = () => {
  return (
    <Layout
      top={{
        title: '슬라이드',
      }}
    >
      <Suspense fallback={<Spinner />}>
        <Feed />
      </Suspense>
    </Layout>
  );
};

export default SlidePage;
