import React, { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import styleModules from './Alert.module.css';
import { CloseSvg } from '../Icons';
import Button from '../Button/Button';
import Grid from '../Grid/Grid';
import { useTheme } from '../../utils/theme';

const components = {
  error: {
    component: lazy(() => import('../Icons/ErrorSvg')),
    background: 'red',
  },
  warning: {
    component: lazy(() => import('../Icons/WarningSvg')),
    background: 'orange',
  },
  info: {
    component: lazy(() => import('../Icons/InfoSvg')),
    background: 'blue',
  },
  success: {
    component: lazy(() => import('../Icons/CheckSvg')),
    background: 'green',
  },
};

const Alert = ({
  message = '',
  position = 'top-right',
  onClose,
  type = 'success',
  delay,
  remove,
}) => {
  const theme = useTheme();
  const styleVariables = {
    '--secondaryColor': theme.secondaryColor,
    '--shadowColor': theme.shadowColor,
  };
  useEffect(() => {
    if (!delay) {
      onClose();
      return;
    }
    const timer = setTimeout(() => {
      if (remove) {
        remove();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      className={`${styleModules[position]} ${styleModules.notificationContainer}`}
      style={styleVariables}
    >
      <Grid
        item={1}
        style={{
          background: components[type].background,
          marginLeft: '0.5rem',
        }}
      >
        {type && (
          <div className={styleModules.typeIcon}>
            <Suspense>
              {React.createElement(components[type].component)}
            </Suspense>
          </div>
        )}
      </Grid>
      <Grid item={10} style={{ justifyContent: 'flex-start' }}>
        <div className={`${styleModules.notification} `}>{message ?? null}</div>
      </Grid>
      <Grid item={1}>
        {onClose && (
          <div className={styleModules.closeIcon}>
            <Button label="" onClick={onClose} icon={<CloseSvg />} rounded />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  position: PropTypes.oneOf([
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
  ]),
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  delay: PropTypes.number,
  remove: PropTypes.func,
};

export default Alert;
