import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
const DEFAULT_OPTIONS = { config: { attributes: true } };

const useMutationObserver = ({
  target,
  callback,
  options = DEFAULT_OPTIONS,
}) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!target || !callback || typeof callback !== 'function') {
      return;
    }

    const { config } = options;
    const obs = new MutationObserver(callback);
    observerRef.current = obs;
    observerRef.current.observe(target, config);

    return () => {
      // Bileşen kaldırıldığında Observer'ı kapatın
      observerRef.current.disconnect();
    };
  }, [target, options, callback]);

  // Observer'ı her zaman return edin
  return observerRef.current;
};

useMutationObserver.propTypes = {
  target: PropTypes.ref,
  callback: PropTypes.func,
  options: PropTypes.object,
};
export default useMutationObserver;
