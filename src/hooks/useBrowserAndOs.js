import { useState, useEffect } from 'react';

export const useBrowserAndOs = () => {
  const [browserName, setBrowserName] = useState('');
  const [browserVersion, setBrowserVersion] = useState('');
  const [osName, setOSName] = useState('');
  const [osVersion, setOSVersion] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const browserInfo = userAgent.match(
      /(edge|opera|chrome|safari|firefox|msie|trident(?=\/))(\/?\d+(\.\d+)?)/i,
    );
    const osInfo = userAgent.match(/(win|mac|linux|android|iphone)/i);

    if (browserInfo) {
      setBrowserName(browserInfo[1]);
      setBrowserVersion(browserInfo[2]);
    }

    if (osInfo) {
      setOSName(osInfo[1]);
      setOSVersion(osInfo[2]);
    }
  }, []);

  return {
    browserName,
    browserVersion,
    osName,
    osVersion,
  };
};
