import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const useWebWorker = ({ data, customFunction, debug = false }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    handleCalculate();
  }, []);

  const handleCalculate = () => {
    const workerCode = `
      self.onmessage = function(event) {
        
        const customFunction = eval('(' + event.data.customFunction + ')');
        const result = processData(event.data.data, customFunction);
        
        postMessage(result);
      };

      function processData(inputData, customFunction) {
        return customFunction(inputData);
      }
    `;

    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));

    // Web Worker'dan gelen sonucu al ve state'i güncelle
    worker.onmessage = (event) => {
      debug && console.log('Worker result:', event);
      setResult(event.data);
      worker.terminate();
    };

    worker.postMessage({ data, customFunction: customFunction.toString() });
  };

  return [result];
};

useWebWorker.propTypes = {
  data: PropTypes.any,
  customFunction: PropTypes.func.isRequired,
  debug: PropTypes.bool,
};

export default useWebWorker;
