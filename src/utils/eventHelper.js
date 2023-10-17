export const debouncedEvent = (fn, delay, debug = false) => {
  let timerId;
  let eventCount = 0;
  let requestTotal = 0;
  let workingRequest = 0;

  return (...args) => {
    eventCount++;
    requestTotal++;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      if (eventCount > 1) {
        workingRequest++;
        if (debug) {
          console.error(
            `RUN EVENT workingRequest=${workingRequest},totalRequest=${requestTotal}`,
          );
        }
        fn(...args);
        workingRequest = 0;
        requestTotal = 0;
      }
      eventCount = 0;
    }, delay);
  };
};

export const throttleEvent = (fn, delay, debug = false) => {
  let timeoutId;
  let lastExecTime = 0;
  let requestTotal = 0;
  let workingRequest = 0;

  return function (...args) {
    const currentTime = new Date().getTime();
    const timeSinceLastExec = currentTime - lastExecTime;

    requestTotal++;
    if (timeSinceLastExec < delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        lastExecTime = currentTime;
        ++workingRequest;
        if (debug) {
          console.error(
            `RUN EVENT workingRequest=${workingRequest},totalRequest=${requestTotal}`,
          );
        }
        fn(...args);
        workingRequest = 0;
        requestTotal = 0;
      }, delay - timeSinceLastExec);
    } else {
      lastExecTime = currentTime;
      ++workingRequest;
      if (debug) {
        console.error(
          `RUN EVENT workingRequest=${workingRequest},totalRequest=${requestTotal}`,
        );
      }
      fn(...args);
      workingRequest = 0;
      requestTotal = 0;
    }
  };
};
