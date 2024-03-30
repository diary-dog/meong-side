import { useNavigate } from 'react-router-dom';

import { Grid } from '../../pages/Grid';
import * as S from './GridLayout.styled';

const GridLayout = ({ type }: { type: Grid }) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.SelectGridType $gridType={type}>
        <button id="all" onClick={() => navigate(`/grid/all`)}>
          모두보기
        </button>
        <button id="uploader" onClick={() => navigate(`/grid/uploader`)}>
          업로드별로 보기
        </button>
      </S.SelectGridType>
    </S.Container>
  );
};

export default GridLayout;
