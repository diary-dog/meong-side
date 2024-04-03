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
import { useState } from 'react';

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, currentMonth, currentDay] = format(
    currentDate,
    'yyyy-LLLL-d'
  ).split('-');
  const [selectedDate, setSelectedDate] = useState<string>(currentDay);

  const startCurrentMonth = startOfMonth(currentDate);
  const endCurrentMonth = endOfMonth(currentDate);
  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 });
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  });
  const handlePrevYear = () => {
    setCurrentDate((prevDate) => subYears(prevDate, 1));
  };

  const handleNextYear = () => {
    setCurrentDate((prevDate) => addYears(prevDate, 1));
  };
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const handleSelectDate = (day: string) => {
    setSelectedDate(day);
  };
  const daysInMonth = days.map((day) => ({
    date: format(day, 'yyyy-MM-dd'),
    year: format(day, 'yyyy'),
    month: format(day, 'LLLL'),
    day: format(day, 'd'),
  }));

  return {
    currentDate: {
      year: currentYear,
      month: currentMonth,
      day: currentDay,
    },
    daysInMonth,
    dispatch: {
      handlePrevYear,
      handleNextYear,
      handlePrevMonth,
      handleNextMonth,
    },
    selectedDate: {
      day: selectedDate,
      selectDate: handleSelectDate,
    },
  };
};
export default useCalendar;
