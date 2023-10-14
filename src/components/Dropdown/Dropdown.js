import React, { useEffect, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input.js';
import styleModules from './Dropdown.module.css';
import { useTheme } from '../../utils/theme';

const Dropdown = ({
  label,
  onSelect,
  data = [],
  value,
  noShadow,
  bordered,
  rounded,
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
    console.error(option);
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
            Sonuç Bulunamadı
          </div>
        )}
      </div>
    );
  }, [data, open, innerValue]);

  return (
    <div className={`${styleModules.dropdownContainer}`} ref={containerRef}>
      <Input
        label={label}
        value={innerValue ?? ''}
        onChange={onChangeInput}
        noShadow={noShadow ?? false}
        bordered={bordered}
        rounded={rounded}
        onBlur={() => {
          optionsRef.current.focus();
        }}
        onClick={setOpenStatus(true)}
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
};

export default Dropdown;
