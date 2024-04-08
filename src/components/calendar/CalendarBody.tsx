import useCalendarContext from './useCalendarContext';
import { VERIFICATION } from '../../utils/constants';

import * as S from './CalendarBody.styled';

const CalendarBody = () => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const { daysInMonth, selectedDate, currentDate } = useCalendarContext();

  return (
    <S.Container>
      <S.DayWrapper>
        {weeks.map((week) => (
          <S.CalendarItem key={week}>{week}</S.CalendarItem>
        ))}
      </S.DayWrapper>
      <S.DayWrapper>
        {daysInMonth.map((date) => (
          <S.Day
            onClick={() => selectedDate.selectDate(date.date)}
            $isCurrentMonth={currentDate.month === date.month}
            $isSelectedDate={selectedDate.date === date.date}
            className={date.month}
            key={date.date}
          >
            <span>{date.day}</span>
            <S.VerificationCircles>
              <S.VerificationTypeCircle type={VERIFICATION.WALK} />
              <S.VerificationTypeCircle type={VERIFICATION.MEAL} />
              <S.VerificationTypeCircle type={VERIFICATION.TREAT} />
              <S.VerificationTypeCircle type={VERIFICATION.BATH} />
            </S.VerificationCircles>
          </S.Day>
        ))}
      </S.DayWrapper>
    </S.Container>
  );
};

export default CalendarBody;
