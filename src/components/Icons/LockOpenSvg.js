import React, { memo } from 'react';
const LockOpenSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M11.015 5.848a.97.97 0 01.692.28.88.88 0 01.293.658v4.777a.88.88 0 01-.293.658.97.97 0 01-.692.279H5.009a1 1 0 01-.716-.279.88.88 0 01-.293-.659V6.787a.88.88 0 01.293-.659 1 1 0 01.716-.279H5.5v-.96c0-.654.247-1.216.74-1.685A2.48 2.48 0 018.01 2.5c.689 0 1.275.234 1.76.703.485.469.728 1.03.728 1.685v.96h.516zM8 10.134a.985.985 0 00.704-.28.904.904 0 00.293-.68.904.904 0 00-.293-.68.985.985 0 00-.704-.28.985.985 0 00-.704.28.904.904 0 00-.293.68c0 .268.098.495.293.68.196.187.43.28.704.28zm1.56-4.286v-.96c0-.401-.152-.747-.457-1.038A1.542 1.542 0 008 3.415c-.43 0-.794.145-1.09.435a1.4 1.4 0 00-.447 1.038v.96H9.56z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(LockOpenSvg);
