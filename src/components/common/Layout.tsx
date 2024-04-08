import { PropsWithChildren, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CalendarIcon, HomeIcon, SettingIcon, TotalIcon } from '../Icons';
import ROUTE_PATH from '../../router/constants';
import { THEME } from '../../styles/theme';

import * as S from './Layout.styled';

interface TopBar {
  title: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
  backGroundColor?: string;
}

const TopBar = ({
  title,
  leftButton,
  rightButton,
  backGroundColor,
}: PropsWithChildren<TopBar>) => {
  return (
    <>
      <S.TOP.Wrapper $backGroundColor={backGroundColor}>
        {leftButton ? leftButton : <div className="blank"></div>}
        <S.TOP.Title>{title}</S.TOP.Title>
        {rightButton ? rightButton : <div className="blank"></div>}
      </S.TOP.Wrapper>
    </>
  );
};
const activeStyling = (currentPath: string, ...routePath: string[]) => {
  const splitPath = currentPath.split('/').filter((path: string) => path);
  if (
    splitPath.length > 1
      ? routePath.join('').includes(splitPath[0])
      : routePath.includes(currentPath)
  ) {
    return THEME.COLORS['P-BUTTON1'];
  } else {
    return THEME.COLORS['INACTIVE-BUTTON'];
  }
};

const BottomBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.BOTTOM.Container>
      <S.BOTTOM.Item onClick={() => navigate(ROUTE_PATH.ROOT)}>
        <HomeIcon color={activeStyling(pathname, ROUTE_PATH.ROOT)} />
        <S.BOTTOM.Title>홈</S.BOTTOM.Title>
      </S.BOTTOM.Item>
      <S.BOTTOM.Item onClick={() => navigate(ROUTE_PATH.CALENDAR)}>
        <CalendarIcon color={activeStyling(pathname, ROUTE_PATH.CALENDAR)} />
        <S.BOTTOM.Title>캘린더</S.BOTTOM.Title>
      </S.BOTTOM.Item>
      <S.BOTTOM.Item onClick={() => navigate(ROUTE_PATH.SLIDE)}>
        <TotalIcon
          color={activeStyling(pathname, ROUTE_PATH.SLIDE, ROUTE_PATH.GRID)}
        />
        <S.BOTTOM.Title>모아보기</S.BOTTOM.Title>
      </S.BOTTOM.Item>
      <S.BOTTOM.Item onClick={() => navigate(ROUTE_PATH.SETTING)}>
        <SettingIcon color={activeStyling(pathname, ROUTE_PATH.SETTING)} />
        <S.BOTTOM.Title>설정</S.BOTTOM.Title>
      </S.BOTTOM.Item>
    </S.BOTTOM.Container>
  );
};
const Layout = ({ top, children }: { top?: TopBar; children: ReactNode }) => {
  return (
    <S.Container>
      {top && <TopBar {...top} />}
      <S.ContentsWrapper hasTop={!!top}>{children}</S.ContentsWrapper>
      <BottomBar />
    </S.Container>
  );
};

export default Layout;
