import { useEffect, useState } from 'react';

export const useInView = (target, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const callback = (entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    };

    observer?.disconnect();

    if (target.current) {
      const _observer = new IntersectionObserver(callback, options);

      _observer.observe(target.current);
      setObserver(_observer);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return isIntersecting;
};
