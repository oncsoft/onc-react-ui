import React, { memo } from 'react';
const PenSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.84 5.24l-1.013 1.013-2.08-2.08L10.76 3.16a.535.535 0 01.393-.16c.156 0 .287.053.394.16l1.293 1.293c.107.107.16.238.16.394a.535.535 0 01-.16.393zM3 10.92l6.147-6.147 2.08 2.08L5.08 13H3v-2.08z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
));
export default memo(PenSvg);
