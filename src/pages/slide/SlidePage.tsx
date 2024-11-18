import { Suspense } from 'react';

import Layout from '@/widgets/common/Layout';
import Spinner from '@/widgets/common/Spinner';
import Feed from '@/entities/verification/ui/main/Feed';

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
