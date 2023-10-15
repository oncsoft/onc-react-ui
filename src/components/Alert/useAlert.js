import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';
import ThemeProvider from '../../utils/theme';
import styleModules from './Alert.module.css';

export const useAlert = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const showAlert = (props) => {
    const alertElement = (
      <ThemeProvider>
        <Alert
          {...props}
          open={true}
          remove={() => hideAlert(alertContainer)}
        />
      </ThemeProvider>
    );
    const alertContainer = document.createElement('div');

    alertContainer.setAttribute('id', 'alert-container');
    alertContainer.style.cssText = ` position: fixed;
    background-color: #282c34;
    box-shadow: 0 0 0.5rem #1c1d1d;
    width:20rem;
    display: flex;
    flex-direction: column;`;
    alertContainer.classList.add(styleModules[props.position ?? 'top-right']);
    document.body.appendChild(alertContainer);

    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(alertElement, alertContainer);

    setAlertVisible(true);
  };

  const hideAlert = (container) => {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    setAlertVisible(false);
  };

  return { showAlert, alertVisible };
};
