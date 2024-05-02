'use client';

import React, { useEffect, useState } from 'react';

import styles from './Calendar.module.css';

import CalendarHeader from './items/CalendarHeader';
import CalendarMain from './items/CalendarMain';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <article className={styles['calendar-container']}>
      <CalendarHeader />

      <CalendarMain currentDate={currentDate} />
    </article>
  );
};

export default Calendar;
