import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { LeftArrowIcon } from '@/widgets/common/Icons';
import Spinner from '@/widgets/common/Spinner';
import { THEME } from '@/shared/styles/theme';
import Layout from '@/widgets/common/Layout';
import useNavigateBack from '@/shared/hooks/useNavigateBack';
import DetailVerificationItem from '@/entities/verification/ui/detail/DetailVerificationItem';
import useDetailVerification from '@/entities/verification/queries/useDetailVerification';

const DetailVerification = () => {
  const { verificationId } = useParams();

  const {
    data: { data: detailVerification },
  } = useDetailVerification({
    verificationId: verificationId!,
  });
  return <DetailVerificationItem verification={detailVerification} as="div" />;
};

const DetailVerificationPage = () => {
  const navigateBack = useNavigateBack();
  return (
    <Layout
      top={{
        title: '상세 인증',
        leftButton: (
          <LeftArrowIcon
            style={{ color: THEME.COLORS['P-BUTTON1'] }}
            onClick={() => navigateBack()}
          />
        ),
      }}
    >
      <Suspense fallback={<Spinner />}>
        <DetailVerification />
      </Suspense>
    </Layout>
  );
};

export default DetailVerificationPage;
