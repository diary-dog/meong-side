import useCalendarContext from './useCalendarContext';
import { VERIFICATION } from '../../../constants/verifications';

import * as S from './CalendarBody.styled';
import VerificationCategoryCircle from './VerificationCategoryCircle';

const CalendarBody = () => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const {
    calendar: { daysInMonth, selectedDate, currentDate },
    verifications: { dates },
  } = useCalendarContext();
  return (
    <S.Container>
      <S.DayWrapper>
        {weeks.map((week) => (
          <S.CalendarItem key={week}>{week}</S.CalendarItem>
        ))}
      </S.DayWrapper>
      <S.DayWrapper>
        {daysInMonth.map((date) => {
          const savedDate = dates.find(
            (savedDate) => savedDate.date === date.date
          );
          return (
            <S.Day
              onClick={() => selectedDate.selectDate(date.date)}
              $isCurrentMonth={currentDate.month === date.month}
              $isSelectedDate={selectedDate.date === date.date}
              className={date.month}
              key={date.date}
            >
              <span>{date.day}</span>
              <S.VerificationCircles>
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.WALK}
                />
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.MEAL}
                />
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.TREATS}
                />
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.BATH}
                />
              </S.VerificationCircles>
            </S.Day>
          );
        })}
      </S.DayWrapper>
    </S.Container>
  );
};

export default CalendarBody;
