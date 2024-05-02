'use client';

import React, { useState } from 'react';

import styles from './Calendar.module.css';

import CalendarHeader from './items/CalendarHeader';
import CalendarMain from './items/CalendarMain';

const Calendar = () => {
  const getDate = new Date();
  const getYear = getDate.getFullYear();
  const getMonth = getDate.getMonth() + 1;

  const [currentDate, setCurrentDate] = useState<Date>(new Date(getYear, getMonth, 0));

  return (
    <article className={styles['calendar-container']}>
      <CalendarHeader />

      <CalendarMain currentDate={currentDate} />
    </article>
  );
};

export default Calendar;
