import React, { memo } from 'react';
const SpeedSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M6.865 14.861c.137 0 .26-.03.37-.089.109-.059.209-.148.3-.266l4.908-7.027a.942.942 0 00.158-.452.86.86 0 00-.41-.813.86.86 0 00-.459-.13H9.203l.793-4.115a.726.726 0 00.027-.205.841.841 0 00-.246-.609.856.856 0 00-.601-.266h-.11a.842.842 0 00-.198.048.609.609 0 00-.17.102.503.503 0 00-.192.164.107.107 0 00-.02.027.107.107 0 01-.021.028l-4.908 6.48a.942.942 0 00-.158.451.86.86 0 00.41.814.86.86 0 00.459.13l2.529.013-.807 4.69c-.036.2-.004.39.096.567a.9.9 0 00.595.445c.059.009.12.013.184.013zm0-.875l.985-5.7-3.582-.015 4.867-6.507-.985 5.181 3.582.014-4.867 7.027z"
      fill="#E9F2F6"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(SpeedSvg);
