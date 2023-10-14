import React, { memo, forwardRef } from 'react';
const ArrowLeftSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M2.5 8c0-.262.104-.516.274-.7l4.837-5.015A.937.937 0 018.278 2c.252 0 .497.108.675.285l.556.578c.171.184.275.439.275.7 0 .262-.104.517-.275.694L7.33 6.52h5.222c.519 0 .949.447.949.986v.986c0 .54-.43.986-.95.986H7.33l2.18 2.264c.171.177.275.432.275.693 0 .262-.104.517-.275.701l-.556.57a.914.914 0 01-1.343 0L2.775 8.693A1.011 1.011 0 012.5 8z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ArrowLeftSvg);
