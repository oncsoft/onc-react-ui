import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme.js';
import styleModules from './DateTime.module.css';
import Grid from '../Grid/Grid.js';
import Button from '../Button/Button.js';
import Calendar from '../Calendar/Calendar.js';
import CalendarSvg from '../Icons/CalendarSvg.js';
import Input from '../Input/Input.js';

const DateTime = ({
  label,
  value,
  onChange,
  error,
  disabled,
  bordered,
  rounded,
  noShadow,
}) => {
  const [calendar, setCalendar] = useState(false);
  const theme = useTheme();

  const errorStatus = error;

  const styleVariables = {
    '--primaryColor': errorStatus
      ? theme.errorColor ?? 'red'
      : theme.primaryColor,
    '--shadowColor': noShadow ? '' : theme.shadowColor,
    '--disabledColor': theme.disabledColor,
  };

  const bottomBorderUnset =
    rounded || bordered
      ? {
          borderBottom: 0,
        }
      : {};

  const calendarOpen = () => {
    setCalendar(true);
  };

  const calendarOnChange = (date) => {
    onChange(date);
    setCalendar(false);
  };

  return (
    <>
      <div
        className={`${styleModules.dateTimeContainer} ${
          disabled ? styleModules.disabled : ''
        } `}
        style={{ ...styleVariables, ...bottomBorderUnset }}
      >
        <Input
          value={value}
          type={'text'}
          label={label}
          settings={
            <Grid item={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
              <Button
                style={{ padding: '0.2rem' }}
                icon={<CalendarSvg />}
                onClick={calendarOpen}
              />
            </Grid>
          }
        />
        <div className={`${styleModules.calendarContainer}`}>
          <Calendar open={calendar} value={value} onChange={calendarOnChange} />
        </div>
      </div>
    </>
  );
};

DateTime.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputSize: PropTypes.number,
  error: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  disabled: PropTypes.bool,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  noShadow: PropTypes.bool,
};

export default DateTime;
