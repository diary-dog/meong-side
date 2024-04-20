import { ReactNode } from 'react';

import { CalendarContext } from './useCalendarContext';
import useCalendar from '../../../hooks/useCalendar';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import Verification from './Verification';
import styled from 'styled-components';
import useVerificationCalendar from '../hooks/queries';

const CalendarRoot = ({ children }: { children: ReactNode }) => {
  const calendar = useCalendar();
  const [year, month] = calendar.selectedDate.date.split('-').map(Number);
  const verifications = useVerificationCalendar({
    year: year ?? new Date().getFullYear(),
    month: month ?? new Date().getMonth() + 1,
  });
  return (
    <CalendarContext.Provider
      value={{ calendar, verifications: verifications }}
    >
      <Container>{children}</Container>
    </CalendarContext.Provider>
  );
};

const Calendar = Object.assign(CalendarRoot, {
  Header: CalendarHeader,
  Body: CalendarBody,
  Footer: Verification,
});

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
