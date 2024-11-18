import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import { GridType } from '../../entities/verification/verification.dto';
import { LeftArrowIcon } from '../../shared/ui/Icons';

import * as S from './ui/GridLayout.styled';

const GridLayout = ({
  type = 'all',
  children,
}: PropsWithChildren<{ type?: GridType }>) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.TopBar $hasGridType={!!type}>
        {type ? (
          <S.SelectGridType $gridType={type}>
            <button id="all" onClick={() => navigate(`/grid/all`)}>
              모두보기
            </button>
            <button id="uploader" onClick={() => navigate(`/grid/uploader`)}>
              업로드별로 보기
            </button>
          </S.SelectGridType>
        ) : (
          <S.BackButton
            type="button"
            onClick={() => navigate('/grid/uploader')}
          >
            <LeftArrowIcon />
            <div>뒤로가기</div>
          </S.BackButton>
        )}
      </S.TopBar>
      <S.Layout>{children}</S.Layout>
    </S.Container>
  );
};

export default GridLayout;
