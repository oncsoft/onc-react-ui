import React, { memo } from 'react';
const DropSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M11.209 3c.494 0 .917.175 1.266.525.35.35.525.77.525 1.264 0 .492-.175.912-.525 1.258L11.22 7.29l.58.58a.176.176 0 010 .257L10.628 9.3a.176.176 0 01-.256 0l-.586-.586L6.42 12.08a.684.684 0 01-.502.207H4.786L3.357 13 3 12.643l.714-1.429v-1.133c0-.197.07-.364.207-.502l3.365-3.365-.586-.586a.176.176 0 010-.256L7.872 4.2a.176.176 0 01.256 0l.58.58 1.245-1.255C10.3 3.175 10.718 3 11.21 3zM6 11l3-3-1-1-3 3v1h1z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(DropSvg);
