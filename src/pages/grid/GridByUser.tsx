import { useLocation, useNavigate } from 'react-router-dom';

import ROUTE_PATH from '../../router/constants';
import { Layout } from '../../components';
import { AllGrid } from '../../components/grid';
import { LeftArrowIcon, SlideIcon } from '../../components/Icons';
import { Sort } from './Grid';

import * as S from './GridByUser.styled';

const GridByUser = () => {
  const navigate = useNavigate();

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
      <S.Container>
        <S.BackButton onClick={() => navigate('/grid/uploader')}>
          <LeftArrowIcon />
          <div>뒤로가기</div>
        </S.BackButton>
        <S.Uploader>둘쨰딸</S.Uploader>
      </S.Container>
      <AllGrid sortType={sortType as Sort} />
    </Layout>
  );
};
export default GridByUser;
