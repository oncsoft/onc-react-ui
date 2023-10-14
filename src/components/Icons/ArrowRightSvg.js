import React, { memo, forwardRef } from 'react';
const ArrowRightSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.5 8c0-.262-.104-.516-.274-.7L8.389 2.284A.937.937 0 007.722 2a.968.968 0 00-.675.285l-.556.578c-.171.184-.275.439-.275.7 0 .262.104.517.275.694L8.67 6.52H3.45c-.519 0-.949.447-.949.986v.986c0 .54.43.986.95.986H8.67l-2.18 2.264c-.171.177-.275.432-.275.693 0 .262.104.517.275.701l.556.57a.914.914 0 001.343 0l4.836-5.014c.17-.177.274-.431.274-.693z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ArrowRightSvg);
