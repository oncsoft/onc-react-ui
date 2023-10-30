import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
const useStateRefCallback = (initialState) => {
  const [state, setState] = useState(initialState);

  const callbackRef = useRef();
  const valueRef = useRef();
  const isFirstCallbackCall = useRef(true);

  const _setState = useCallback((setStateAction, callback) => {
    callbackRef.current = callback;
    setState(setStateAction);
  }, []);

  useEffect(() => {
    if (initialState) {
      valueRef.current = initialState;
    }
  }, []);

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false;
      return;
    }
    valueRef.current = state;
    callbackRef.current?.(state);
  }, [state]);

  return [state, _setState, valueRef];
};

useStateRefCallback.propTypes = {
  initialState: PropTypes.any,
};

export default useStateRefCallback;
