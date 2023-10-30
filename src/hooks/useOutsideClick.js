import { useEffect } from 'react';
import PropTypes from 'prop-types';
const useOutsideClick = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
};

useOutsideClick.propTypes = {
  ref: PropTypes.ref,
  callback: PropTypes.func,
};
export default useOutsideClick;
