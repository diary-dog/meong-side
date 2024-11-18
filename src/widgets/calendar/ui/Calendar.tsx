import { ReactNode } from 'react';
import styled from 'styled-components';

import { CalendarContext } from './useCalendarContext';
import useCalendar from '../lib/useCalendar';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import DetailVerification from './DetailVerification';
import useVerificationCalendar from '@/entities/verification/queries/useVerificationCalendar';

const CalendarRoot = ({ children }: { children: ReactNode }) => {
  const calendar = useCalendar();
  const [year, month] = calendar.selectedDate.date.split('-').map(Number);
  const { data: verifications } = useVerificationCalendar({
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
  Footer: DetailVerification,
});

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
