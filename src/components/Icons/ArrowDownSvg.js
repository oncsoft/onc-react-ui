import React, { memo, forwardRef } from 'react';
const ArrowDownSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 13.5c.262 0 .516-.104.7-.274l5.015-4.837A.937.937 0 0014 7.722a.968.968 0 00-.285-.675l-.578-.556a1.045 1.045 0 00-.7-.275c-.262 0-.517.104-.694.275L9.48 8.67V3.45c0-.519-.447-.949-.986-.949h-.986c-.54 0-.986.43-.986.95V8.67l-2.264-2.18a1.011 1.011 0 00-.693-.275c-.262 0-.517.104-.701.275l-.57.556a.914.914 0 000 1.343l5.014 4.836c.177.17.431.274.693.274z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ArrowDownSvg);
