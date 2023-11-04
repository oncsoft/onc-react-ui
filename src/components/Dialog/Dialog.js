import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './Dialog.module.css';
import Grid from '../Grid/Grid';
import { useTheme, getStyleVariables } from '../../utils/theme';
import { hexToRgba } from '../../utils/helper';
const Dialog = ({
  open,
  title,
  content,
  children,
  actions,
  style = {},
  width,
  height,
}) => {
  const theme = useTheme();

  const styleVariables = {
    ...getStyleVariables({
      theme,
      style: {
        '--backdropColor': hexToRgba(theme.secondaryColor, 0.7),
        '--width': width ?? 'calc(100vw / 4)',
        '--height': height ?? 'calc(100vh / 2)',
      },
    }),
    ...style,
  };

  return (
    <>
      {open && (
        <div className={styleModules.backdrop} style={styleVariables}>
          <Grid
            direction="column"
            justifyContent={'center'}
            alignItems={'center'}
            className={`${styleModules.dialog}`}
            style={styleVariables}
          >
            <Grid item={1} style={{ height: 40 }}>
              <h2 style={styleVariables}>{title}</h2>
            </Grid>

            <Grid
              className={`${styleModules.content}`}
              style={styleVariables}
              item={10}
              mbt
            >
              {content}
              {children}
            </Grid>

            <Grid item={1} mbt style={{ height: 40 }}>
              {actions}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.object,
  style: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Dialog;
