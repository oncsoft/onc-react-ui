import React, { memo } from 'react';
const ErrorSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 13.88c1.049 0 2.02-.262 2.911-.786a5.44 5.44 0 002.043-2.043 5.645 5.645 0 00.786-2.911c0-1.049-.262-2.02-.786-2.911a5.44 5.44 0 00-2.043-2.043A5.645 5.645 0 008 2.4a5.62 5.62 0 00-2.898.786 5.65 5.65 0 00-2.056 2.056A5.62 5.62 0 002.26 8.14c0 1.04.262 2.005.786 2.898a5.543 5.543 0 002.043 2.056A5.645 5.645 0 008 13.88zm0-1.131c-.828 0-1.6-.212-2.318-.635a4.469 4.469 0 01-1.656-1.656 4.485 4.485 0 01-.635-2.318c0-.828.212-1.6.635-2.318.405-.7.957-1.251 1.656-1.656A4.485 4.485 0 018 3.531c.828 0 1.6.212 2.318.635.7.405 1.251.957 1.656 1.656.423.717.635 1.49.635 2.318 0 .828-.212 1.6-.635 2.318a4.469 4.469 0 01-1.656 1.656A4.485 4.485 0 018 12.749zm.566-4.043v-3.45H7.434v3.45h1.132zm0 2.318v-1.16H7.434v1.16h1.132z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ErrorSvg);