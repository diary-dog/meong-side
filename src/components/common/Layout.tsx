import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { CalendarIcon, HomeIcon, SettingIcon, TotalIcon } from '../Icons';
import ROUTE_PATH from '../../router/constants';
import { THEME } from '../../styles/theme';

const LayoutRoot = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
const TopBar = ({
  title,
  leftButton,
  rightButton,
}: PropsWithChildren<{
  title: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
}>) => {
  return (
    <TOP.Container>
      {leftButton ? leftButton : <div className="blank"></div>}
      <TOP.Title>{title}</TOP.Title>
      {rightButton ? rightButton : <div className="blank"></div>}
    </TOP.Container>
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
    <BOTTOM.Container>
      <BOTTOM.Item onClick={() => navigate(ROUTE_PATH.ROOT)}>
        <HomeIcon color={activeStyling(pathname, ROUTE_PATH.ROOT)} />
        <BOTTOM.Title>홈</BOTTOM.Title>
      </BOTTOM.Item>
      <BOTTOM.Item onClick={() => navigate(ROUTE_PATH.CALENDAR)}>
        <CalendarIcon color={activeStyling(pathname, ROUTE_PATH.CALENDAR)} />
        <BOTTOM.Title>캘린더</BOTTOM.Title>
      </BOTTOM.Item>
      <BOTTOM.Item onClick={() => navigate(ROUTE_PATH.SLIDE)}>
        <TotalIcon
          color={activeStyling(pathname, ROUTE_PATH.SLIDE, ROUTE_PATH.GRID)}
        />
        <BOTTOM.Title>모아보기</BOTTOM.Title>
      </BOTTOM.Item>
      <BOTTOM.Item onClick={() => navigate(ROUTE_PATH.SETTING)}>
        <SettingIcon color={activeStyling(pathname, ROUTE_PATH.SETTING)} />
        <BOTTOM.Title>설정</BOTTOM.Title>
      </BOTTOM.Item>
    </BOTTOM.Container>
  );
};

const Layout = Object.assign(LayoutRoot, { TopBar, BottomBar });

export default Layout;

const Container = styled.div`
  width: 100%;
`;

const BOTTOM = {
  Container: styled.div`
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 393px;
    bottom: 0;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  `,
  Title: styled.span`
    font-size: ${({ theme }) => theme.FONT.SM};
  `,
};

const TOP = {
  Container: styled.div`
    position: fixed;
    height: 50px;
    width: 100%;
    max-width: 393px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: white;

    .blank {
      width: 30px;
    }
    svg {
      cursor: pointer;
    }
  `,
  Title: styled.h2`
    text-align: center;
    color: ${({ theme }) => theme.COLORS['FONT-COLOR-A']};
    font-size: ${({ theme }) => theme.FONT.LG};
  `,
};
