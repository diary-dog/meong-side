import { useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '../../router/constants';
import { Layout } from '../../components';
import { SlideIcon } from '../../components/Icons';
import {
  GridVerificationsForAll,
  GridLayout,
  GridVerificationsByUploader,
} from './components';
import { GridType } from '../../types/verification';

const Grid = () => {
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

export default Grid;
