import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

import { Layout } from '../../shared/ui';
import { LeftArrowIcon } from '../../shared/ui/Icons';
import ROUTE_PATH from '../../shared/constants/routePath';
import Spinner from '../../shared/ui/Spinner';
import { THEME } from '../../shared/styles/theme';
import DetailVerificationItem from '../../widgets/verification/ui/DetailVerificationItem';
import useDetailVerification from '../../entities/verification/api/useDetailVerification';

const DetailVerification = () => {
  const { data: detailVerification } = useDetailVerification({
    verificationId: '1',
  });
  return <DetailVerificationItem verification={detailVerification} as="div" />;
};

const DetailVerificationPage = () => {
  const navigate = useNavigate();
  return (
    <Layout
      top={{
        title: '상세 인증',
        leftButton: (
          <LeftArrowIcon
            style={{ color: THEME.COLORS['P-BUTTON1'] }}
            onClick={() => navigate(ROUTE_PATH.SLIDE)}
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
