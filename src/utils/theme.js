import React, { useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './defaultTheme.js';

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children, theme }) => {
  const selectedTheme = theme || defaultTheme;
  useLayoutEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--primary', selectedTheme.primaryColor);
    root.style.setProperty('--secondary', selectedTheme.secondaryColor);
  }, []);

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
