/* eslint-disable */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';
import types from './FormType';

const FormBuilder = forwardRef(({ data = [] }, ref) => {
  const convertDataToValue = (data) => {
    return data.length
      ? data.reduce((prev, cur) => {
          return { ...prev, [cur.name]: cur.value };
        }, {})
      : {};
  };
  const [value, setValue] = useState(convertDataToValue(data));

  const onChange = (name) => (e) => {
    setValue((current) => ({
      ...current,
      [name]: e.target?.hasOwnProperty('checked')
        ? e.target?.checked
        : e.target?.value ?? e,
    }));
  };

  useImperativeHandle(
    ref,
    () => ({
      getData: value,
      setData: setValue,
    }),
    [value],
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent={'center'}
      alignItems={'center'}
      spacing={2}
    >
      {data.length &&
        data.map((component, index) => {
          const Component = types.get(component.type);
          return (
            <Grid mbt key={component.type + index} item={component.item ?? 12}>
              <Component
                {...component}
                value={value[component.name]}
                onChange={onChange(component.name)}
                onSelect={onChange(component.name)}
              />
            </Grid>
          );
        })}
    </Grid>
  );
});

FormBuilder.propTypes = {
  data: PropTypes.array,
  ref: PropTypes.ref,
};
export default FormBuilder;
