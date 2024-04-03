import styled from 'styled-components';

import useCalendarContext from './useCalendarContext';
import {
  LeftArrowIcon,
  LeftTriangle,
  RightArrowIcon,
  RightTriangle,
} from '../Icons';
import { THEME } from '../../styles/theme';

const CalendarHeader = () => {
  const { dispatch, currentDate } = useCalendarContext();

  return (
    <Container>
      <ChangeButton>
        <button onClick={dispatch.handlePrevYear}>
          <LeftTriangle width={19} height={13} />
        </button>
        <span>{currentDate.year}</span>
        <button onClick={dispatch.handleNextYear}>
          <RightTriangle width={19} height={13} />
        </button>
      </ChangeButton>
      <ChangeButton>
        <button onClick={dispatch.handlePrevMonth}>
          <LeftArrowIcon
            width={18}
            height={9.9}
            color={THEME.COLORS['P-BUTTON1']}
          />
        </button>
        <span>{currentDate.month}</span>
        <button onClick={dispatch.handleNextMonth}>
          <RightArrowIcon
            width={18}
            height={9.9}
            color={THEME.COLORS['P-BUTTON1']}
          />
        </button>
      </ChangeButton>
    </Container>
  );
};

export default CalendarHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChangeButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  gap: 20px;

  font-size: 20px;
  line-height: 25.6px;
`;
