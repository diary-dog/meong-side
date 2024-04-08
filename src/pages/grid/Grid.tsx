import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ROUTE_PATH from '../../router/constants';
import { Layout } from '../../components';
import { SlideIcon } from '../../components/Icons';
import { AllGrid, GridLayout, UploaderGrid } from './components';

export type Grid = 'all' | 'uploader';
export type Sort = 'descending' | 'descending';

const Grid = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: Grid }>();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sortType = searchParams.get('sortType') || 'ascending';

  return (
    <Layout
      top={{
        title: '그리드',
        rightButton: <SlideIcon onClick={() => navigate(ROUTE_PATH.SLIDE)} />,
      }}
    >
      <GridLayout type={type ?? 'all'} />
      {type === 'all' && <AllGrid sortType={sortType as Sort} />}
      {type === 'uploader' && <UploaderGrid />}
    </Layout>
  );
};

export default Grid;
