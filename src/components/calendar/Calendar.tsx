'use client';

import React, { useEffect, useState } from 'react';

import styles from './Calendar.module.css';

import CalendarHeader from './items/CalendarHeader';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <article className={styles['calendar-container']}>
      <CalendarHeader />
    </article>
  );
};

export default Calendar;
