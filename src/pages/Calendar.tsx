import {
  addMonths,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears,
} from 'date-fns';
import { Layout } from '../components';
import styled from 'styled-components';
import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startCurrentMonth = startOfMonth(currentDate);
  const endCurrentMonth = endOfMonth(currentDate);

  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 });
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });
  const formatDays = days.map((day) => ({
    date: format(day, 'yyyy-MM-dd'),
    year: format(day, 'yyyy'),
    month: format(day, 'MM'),
    day: format(day, 'd'),
  }));
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  // 이전 해로 이동
  const handlePrevYear = () => {
    setCurrentDate((prevDate) => subYears(prevDate, 1));
  };

  // 다음 해로 이동
  const handleNextYear = () => {
    setCurrentDate((prevDate) => addYears(prevDate, 1));
  };
  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };
  const formatCurrentMonth = format(currentDate, 'MM');
  return (
    <Layout>
      <h1>캘린더보기</h1>
      <div>{format(currentDate, 'LLLL')}</div>
      <ChangeButton>
        <button onClick={handlePrevYear}>이전 해</button>
        <button onClick={handleNextYear}>다음 해</button>
      </ChangeButton>
      <ChangeButton>
        <button onClick={handlePrevMonth}>이전 달</button>
        <button onClick={handleNextMonth}>다음 달</button>
      </ChangeButton>
      <CalenderContainer>
        <DayContainer>
          {weeks.map((week) => (
            <CalendarItem>{week}</CalendarItem>
          ))}
        </DayContainer>
        <DayContainer>
          {formatDays.map((date) => (
            <Day
              $isCurrentMonth={formatCurrentMonth === date.month}
              className={date.month}
              key={date.date}
            >
              {date.day}
            </Day>
          ))}
          <Layout.BottomBar />
        </DayContainer>
      </CalenderContainer>
    </Layout>
  );
};

export default Calendar;
const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-row-gap: 15px;
`;
const CalendarItem = styled.div`
  display: flex;
  justify-content: center;
`;
const Day = styled(CalendarItem)<{ $isCurrentMonth?: boolean }>`
  color: ${({ $isCurrentMonth, theme }) =>
    $isCurrentMonth ? theme.COLORS['FONT-COLOR-A'] : 'transparent'};
`;

const ChangeButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;
