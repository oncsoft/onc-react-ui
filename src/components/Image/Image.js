import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, getStyleVariables } from '../../utils/theme.js';
import styleModules from './Image.module.css';

const Image = ({ src, style, bordered, rounded }) => {
  const theme = useTheme();

  const styles = {
    ...getStyleVariables({
      theme,
      style: {},
    }),
    ...style,
  };

  return (
    <img
      className={`${bordered ? styleModules.image : ''} ${
        rounded ? styleModules.rounded : ''
      }`}
      src={src}
      style={styles}
    ></img>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
};
Image.defaultProps = {
  src: 'https://avatars.githubusercontent.com/u/147631378?v=4',
};

export default Image;
