import { useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '@/shared/constants/routePath';
import { SlideIcon } from '@/widgets/common/Icons';
import { GridType } from '@/entities/verification/verification.dto';
import Layout from '@/widgets/common/Layout';
import GridLayout from '@/entities/verification/ui/grid/GridLayout';
import GridVerificationsForAll from '@/entities/verification/ui/grid/GridVerificationsForAll';
import GridVerificationsByUploader from '@/entities/verification/ui/grid/GridVerificationsByUploader';

const GridPage = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: GridType }>();

  return (
    <Layout
      top={{
        title: '그리드',
        rightButton: <SlideIcon onClick={() => navigate(ROUTE_PATH.SLIDE)} />,
      }}
    >
      <GridLayout type={type}>
        {type === 'all' && <GridVerificationsForAll />}
        {type === 'uploader' && <GridVerificationsByUploader />}
      </GridLayout>
    </Layout>
  );
};

export default GridPage;
