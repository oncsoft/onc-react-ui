import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './defaultTheme.js';

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children, theme }) => {
  const selectedTheme = theme || defaultTheme;
  return (
    <ThemeContext.Provider value={selectedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.object,
  theme: PropTypes.object,
};

export default ThemeProvider;
