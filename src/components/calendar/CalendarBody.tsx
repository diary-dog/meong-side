import styled from 'styled-components';
import useCalendarContext from './useCalendarContext';
import { VERIFICATION } from '../../utils/constants';
import { getVerificationTypeColor } from '../../utils/getVerificationTypeColor';

const CalendarBody = () => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const { daysInMonth, selectedDate, currentDate } = useCalendarContext();

  return (
    <Container>
      <DayWrapper>
        {weeks.map((week) => (
          <CalendarItem key={week}>{week}</CalendarItem>
        ))}
      </DayWrapper>
      <DayWrapper>
        {daysInMonth.map((date) => (
          <Day
            onClick={() => selectedDate.selectDate(date.date)}
            $isCurrentMonth={currentDate.month === date.month}
            $isSelectedDate={selectedDate.date === date.date}
            className={date.month}
            key={date.date}
          >
            <span>{date.day}</span>
            <VerificationCircles>
              <VerificationTypeCircle type={VERIFICATION.WALK} />
              <VerificationTypeCircle type={VERIFICATION.MEAL} />
              <VerificationTypeCircle type={VERIFICATION.TREAT} />
              <VerificationTypeCircle type={VERIFICATION.BATH} />
            </VerificationCircles>
          </Day>
        ))}
      </DayWrapper>
    </Container>
  );
};

export default CalendarBody;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  padding: 25px 0;
  border-radius: 20px;
`;

const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-row-gap: 15px;
`;
const CalendarItem = styled.div`
  display: flex;
  justify-content: center;
`;

const VerificationCircles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.29px;
`;
const VerificationTypeCircle = styled.div<{ type: string }>`
  width: 7.86px;
  height: 7.86px;
  background-color: ${({ type }) => getVerificationTypeColor(type)};
  border-radius: 100%;
`;

const Day = styled.div<{
  $isCurrentMonth?: boolean;
  $isSelectedDate: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10.14px;
  cursor: pointer;
  visibility: ${({ $isCurrentMonth }) =>
    $isCurrentMonth ? 'visible' : 'hidden'};
  background-color: ${({ $isSelectedDate }) =>
    $isSelectedDate ? '#FFFFE1' : 'transparent'};
`;
