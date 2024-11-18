import { useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '@/shared/constants/routePath';
import { SlideIcon } from '@/shared/ui/Icons';
import {
  GridVerificationsForAll,
  GridLayout,
  GridVerificationsByUploader,
} from '@/widgets/grid';
import { GridType } from '@/entities/verification/verification.dto';
import Layout from '@/shared/ui/Layout';

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
