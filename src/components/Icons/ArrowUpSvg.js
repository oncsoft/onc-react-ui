import React, { memo, forwardRef } from 'react';
const ArrowUpSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 2.5c-.262 0-.516.104-.7.274L2.284 7.611A.937.937 0 002 8.278c0 .252.108.497.285.675l.578.556c.184.171.439.275.7.275.262 0 .517-.104.694-.275L6.52 7.33v5.222c0 .519.447.949.986.949h.986c.54 0 .986-.43.986-.95V7.33l2.264 2.18c.177.171.432.275.693.275.262 0 .517-.104.701-.275l.57-.556a.914.914 0 000-1.343L8.693 2.775A1.011 1.011 0 008 2.5z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ArrowUpSvg);
