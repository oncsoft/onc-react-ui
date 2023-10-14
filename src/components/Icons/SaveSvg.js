import React, { memo } from 'react';
const SaveSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.365 13.375c.34 0 .635-.125.885-.375s.375-.545.375-.885v-7.5l-2.49-2.49h-7.5c-.35 0-.647.125-.892.375s-.368.545-.368.885v8.73c0 .34.123.635.368.885.244.25.542.375.892.375h8.73zm-2.49-7.5h-6.24v-2.49h6.24v2.49zM8 12.115a1.902 1.902 0 01-1.875-1.875A1.902 1.902 0 018 8.365a1.902 1.902 0 011.875 1.875A1.902 1.902 0 018 12.115z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(SaveSvg);
