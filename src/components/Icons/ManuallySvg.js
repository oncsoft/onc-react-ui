import React, { memo } from 'react';
const ManuallySvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.508 12.5a.988.988 0 00.708-.288.93.93 0 00.3-.696V4.508c0-.28-.1-.518-.3-.714a.978.978 0 00-.708-.294h-9c-.272 0-.508.1-.708.3-.2.2-.3.436-.3.708V6.5h1.008V4.484h9v7.032h-9V9.5H2.5v2.016c0 .272.1.504.3.696.2.192.436.288.708.288h9zM7.516 9.992L9.508 8 7.516 6.008v1.5H2.5v.984h5.016v1.5z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ManuallySvg);
