import { createContext, useContext } from 'react';
import { VerificationsForCalendar } from '../../../shared/types/verification';

interface DateInfo {
  year: string;
  month: string;
  day: string;
}
interface CalendarContextType {
  calendar: {
    currentDate: DateInfo;
    daysInMonth: (DateInfo & { date: string })[];
    dispatch: {
      handlePrevYear: () => void;
      handleNextYear: () => void;
      handlePrevMonth: () => void;
      handleNextMonth: () => void;
    };
    selectedDate: {
      date: string;
      selectDate: (date: string) => void;
    };
  };
  verifications: VerificationsForCalendar;
}

export const CalendarContext = createContext<CalendarContextType | null>(null);

export default function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendarContext must be used within CalendarProvider');
  }
  return context;
}
