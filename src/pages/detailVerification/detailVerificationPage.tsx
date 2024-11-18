import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../../shared/ui';
import { LeftArrowIcon } from '../../shared/ui/Icons';
import Spinner from '../../shared/ui/Spinner';
import { THEME } from '../../shared/styles/theme';
import DetailVerificationItem from '../../widgets/verification/ui/DetailVerificationItem';
import useDetailVerification from '../../entities/verification/queries/useDetailVerification';
import useNavigateBack from '../../shared/hooks/useNavigateBack';

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
