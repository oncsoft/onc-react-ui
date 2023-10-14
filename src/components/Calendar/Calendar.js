import React, { useState } from 'react';
import stylesModule from './Calendar.module.css';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme.js';

const Calendar = ({ disabledRangeList, onChange, style = {} }) => {
  const theme = useTheme();
  const stylesVariables = {
    '--primaryColor': theme.primaryColor,
    '--secondaryColor': theme.secondaryColor,
    '--shadowColor': theme.shadowColor,
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateClick = (date) => () => {
    if (!disabledRangeList.includes(date.toDateString())) {
      setSelectedDate(date);
      onChange(date);
    }
  };

  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const daysInMonth = [];
  const currentDate = new Date(currentMonth);
  currentDate.setDate(1);

  while (currentDate.getMonth() === currentMonth.getMonth()) {
    daysInMonth.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div
      className={`${stylesModule.calendar}`}
      style={{ ...style, ...stylesVariables }}
    >
      <h2>
        {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
        {currentMonth.getFullYear()} Takvimi
      </h2>
      <div className={`${stylesModule.navigation}`}>
        <button onClick={goToPreviousMonth}>&lt; Önceki Ay</button>
        <button onClick={goToNextMonth}>Sonraki Ay &gt;</button>
      </div>
      <div className={`${stylesModule.weekdays}`}>
        <div>Pzt</div>
        <div>Sal</div>
        <div>Çar</div>
        <div>Per</div>
        <div>Cum</div>
        <div>Cmt</div>
        <div>Paz</div>
      </div>
      <div className={`${stylesModule.days}`}>
        {daysInMonth.map((date) => (
          <div
            key={date.toDateString()}
            className={`${stylesModule.day} ${
              selectedDate &&
              selectedDate.toDateString() === date.toDateString()
                ? stylesModule.selected
                : ''
            } ${
              disabledRangeList.includes(date.toDateString())
                ? stylesModule.disabled
                : ''
            }`}
            onClick={handleDateClick(date)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};
Calendar.defaultProps = {
  disabledRangeList: [],
};

Calendar.propTypes = {
  disabledRangeList: PropTypes.array,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export default Calendar;
