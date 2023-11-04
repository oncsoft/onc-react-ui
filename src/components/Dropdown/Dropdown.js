import React, { useEffect, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input.js';
import styleModules from './Dropdown.module.css';
import { useTheme } from '../../utils/theme';
import useOutsideClick from '../../hooks/useOutsideClick.js';
import CaretUpSvg from '../Icons/CaretUpSvg.js';
import CaretDownSvg from '../Icons/CaretDownSvg.js';
import Icon from '../Icon/Icon.js';

const Dropdown = ({
  label,
  onSelect,
  data = [],
  value,
  noShadow,
  bordered,
  rounded,
  placeholder = 'Giriş Yapınız',
  notFoundText = 'Sonuç Bulunamadı.',
}) => {
  const [innerValue, setInnerValue] = useState(value);
  const [isSearch, setIsSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const styleVariables = {
    '--primaryColor': theme.primaryColor,
    '--secondaryColor': theme.secondaryColor,
    '--shadowColor': noShadow ? 'transparent' : theme.shadowColor,
    '--disabledColor': theme.disabledColor,
  };
  const containerRef = useRef();
  const optionsRef = useRef();

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const setOpenStatus = (status) => () => {
    setIsSearch(false);
    setOpen(status);
  };

  const onChangeInput = (e) => {
    setIsSearch(true);
    setInnerValue(e.target.value);
  };

  const onSelectOption = (option) => (e) => {
    e.stopPropagation();
    onSelect(option);
    requestAnimationFrame(setOpenStatus(false));
  };

  const filterData = (data) => {
    return isSearch
      ? data.filter((item) => item && item.includes(innerValue))
      : data;
  };

  const renderOptions = useMemo(() => {
    const filteredData = filterData(data ?? []);
    return (
      <div
        className={`${styleModules.datalist} ${
          open ? styleModules.visible : styleModules.invisible
        }`}
        style={styleVariables}
        tabIndex={0}
        ref={optionsRef}
        onBlur={setOpenStatus(false)}
      >
        {filteredData.length ? (
          filteredData.map((item, index) => {
            return (
              <div
                onClick={onSelectOption(item)}
                className={`${styleModules.option}`}
                key={item + index}
                style={styleVariables}
              >
                {item}
              </div>
            );
          })
        ) : (
          <div className={`${styleModules.option}`} style={styleVariables}>
            {notFoundText}
          </div>
        )}
      </div>
    );
  }, [data, open, innerValue]);

  useOutsideClick(containerRef, setOpenStatus(false));

  return (
    <div className={`${styleModules.dropdownContainer}`} ref={containerRef}>
      <Input
        label={label}
        value={innerValue ?? ''}
        onChange={onChangeInput}
        noShadow={noShadow ?? false}
        bordered={bordered}
        rounded={rounded}
        placeholder={placeholder}
        onClick={setOpenStatus(true)}
        settings={
          open ? (
            <Icon>
              <CaretUpSvg />
            </Icon>
          ) : (
            <Icon>
              <CaretDownSvg />
            </Icon>
          )
        }
      />
      {renderOptions}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  onSelect: PropTypes.func,
  data: PropTypes.array,
  value: PropTypes.string,
  noShadow: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  placeholder: PropTypes.string,
  notFoundText: PropTypes.string,
};

export default Dropdown;
