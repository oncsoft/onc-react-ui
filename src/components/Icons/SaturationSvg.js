import React, { memo } from 'react';
const SaturationSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.24 6.69c-.395-.797-.944-1.635-1.63-2.49a20.61 20.61 0 00-2.355-2.483L8.003 1.5l-.254.214c-.049.04-1.195 1.01-2.358 2.448-.687.85-1.236 1.687-1.63 2.487C3.255 7.672 3 8.642 3 9.533 3 12.272 5.243 14.5 8 14.5s5-2.228 5-4.967c0-.87-.256-1.826-.76-2.844z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(SaturationSvg);
