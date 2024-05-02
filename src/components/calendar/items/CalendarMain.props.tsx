import { Icalendar } from '../Calendar.props';

export type returnDate = {
  year: number;
  month: number;
  day: number;
  date: Date;
  isOpacity?: boolean;
};

export interface ICalendarMain {
  currentDate: Icalendar;
}
