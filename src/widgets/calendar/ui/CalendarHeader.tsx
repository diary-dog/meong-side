import useCalendarContext from './useCalendarContext';
import {
  LeftArrowIcon,
  LeftTriangle,
  RightArrowIcon,
  RightTriangle,
} from '@/widgets/common/Icons';
import { THEME } from '@/shared/styles/theme';

import * as S from './CalendarHeader.styled';

const CalendarHeader = () => {
  const {
    calendar: { dispatch, currentDate },
  } = useCalendarContext();

  return (
    <S.Container>
      <S.ChangeButton>
        <button onClick={dispatch.handlePrevYear}>
          <LeftTriangle width={19} height={13} />
        </button>
        <span>{currentDate.year}</span>
        <button onClick={dispatch.handleNextYear}>
          <RightTriangle width={19} height={13} />
        </button>
      </S.ChangeButton>
      <S.ChangeButton>
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
      </S.ChangeButton>
    </S.Container>
  );
};

export default CalendarHeader;
