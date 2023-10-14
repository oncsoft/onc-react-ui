import React, { useState } from 'react';
import stylesModule from './Calendar.module.css';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme.js';
import Button from '../Button/Button';
import { ChevronLeftSvg, ChevronRightSvg } from '../Icons';
import { getMonthList, getYearList } from '../../utils/dateHelper';
import Grid from '../Grid/Grid';
import { flushSync } from 'react-dom';

const Calendar = ({
  disabledRangeList,
  onChange,
  style = {},
  value = new Date(),
}) => {
  const theme = useTheme();
  const stylesVariables = {
    '--primaryColor': theme.primaryColor,
    '--secondaryColor': theme.secondaryColor,
    '--shadowColor': theme.shadowColor,
  };
  const yearList = getYearList();
  const monthList = getMonthList();
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(value));
  const [selectYear, setSelectYear] = useState(false);
  const [selectMonth, setSelectMonth] = useState(false);

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

  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (
      let date = new Date(firstDay);
      date <= lastDay;
      date.setDate(date.getDate() + 1)
    ) {
      days.push(new Date(date));
    }

    return days;
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(
    currentMonth.getMonth(),
    currentMonth.getFullYear(),
  );
  const firstDay = getFirstDayOfMonth(
    currentMonth.getMonth(),
    currentMonth.getFullYear(),
  );

  const getEmptyBoxes = (count) => {
    const startDayOfWeek = (count + 6) % 7;
    const emptyBoxes = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      emptyBoxes.push(
        <div key={`empty-${i}`} className={stylesModule.emptyDay} />,
      );
    }
    return emptyBoxes;
  };

  const renderDays = (days) => {
    return days.map((date) => (
      <div
        key={date.toDateString()}
        className={`${stylesModule.day} ${
          selectedDate && selectedDate.toDateString() === date.toDateString()
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
    ));
  };

  const onChangeYear = () => {
    setSelectYear(true);
  };

  const renderYears = () => {
    return (
      <Grid container direction={'row'}>
        {yearList.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Grid key={'year' + item} item={3}>
              <Button label={item} onClick={onClickYear(item)} noShadow />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderMonth = () => {
    return (
      <Grid container direction={'row'}>
        {monthList.map((item, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Grid key={item} item={4}>
              <Button label={item} onClick={onClickMonth(index)} noShadow />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const onClickMonth = (month) => () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(month);
    flushSync(() => {
      setCurrentMonth(newMonth);
      setSelectYear(false);
      setSelectMonth(false);
    });
  };

  const onClickYear = (year) => () => {
    const newYear = new Date(currentMonth);
    newYear.setFullYear(year);
    flushSync(() => {
      setCurrentMonth(newYear);
      setSelectYear(false);
      setSelectMonth(true);
    });
  };

  return (
    <div
      className={`${stylesModule.calendar}`}
      style={{ ...style, ...stylesVariables }}
    >
      <div className={`${stylesModule.navigation}`}>
        <Button
          icon={<ChevronLeftSvg />}
          rounded
          type="secondary"
          onClick={goToPreviousMonth}
        />
        <Button
          label={
            currentMonth.toLocaleString('default', { month: 'long' }) +
            currentMonth.getFullYear()
          }
          onClick={onChangeYear}
        />
        <Button
          icon={<ChevronRightSvg />}
          rounded
          type="secondary"
          onClick={goToNextMonth}
        />
      </div>
      <div className={`${stylesModule.content}`}>
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
          {!(selectMonth || selectYear) && getEmptyBoxes(firstDay)}
          {!(selectMonth || selectYear) && renderDays(daysInMonth)}
          {selectYear && renderYears()}
          {selectMonth && renderMonth()}
        </div>
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
  value: PropTypes.date,
  style: PropTypes.object,
};

export default Calendar;
