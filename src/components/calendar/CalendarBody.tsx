import styled from 'styled-components';
import useCalendarContext from './useCalendarContext';

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
            onClick={() => selectedDate.selectDate(date.day)}
            $isCurrentMonth={currentDate.month === date.month}
            $isSelectedDate={
              currentDate.month === date.month && selectedDate.day === date.day
            }
            className={date.month}
            key={date.date}
          >
            {date.day}
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
const Day = styled(CalendarItem)<{
  $isCurrentMonth?: boolean;
  $isSelectedDate: boolean;
}>`
  cursor: pointer;
  color: ${({ $isCurrentMonth, theme }) =>
    $isCurrentMonth ? theme.COLORS['FONT-COLOR-A'] : 'transparent'};
  background-color: ${({ $isSelectedDate }) =>
    $isSelectedDate ? '#FFFFE1' : 'transparent'};
`;
