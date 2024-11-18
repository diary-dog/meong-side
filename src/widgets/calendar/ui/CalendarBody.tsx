import useCalendarContext from './useCalendarContext';
import { VERIFICATION } from '../../../entities/verification/constants';

import VerificationCategoryCircle from './VerificationCategoryCircle';

import * as S from './CalendarBody.styled';

const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarBody = () => {
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
                  category={VERIFICATION.WALK.type}
                />
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.MEAL.type}
                />
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.TREATS.type}
                />
                <VerificationCategoryCircle
                  verifications={savedDate?.verifications}
                  category={VERIFICATION.BATH.type}
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
