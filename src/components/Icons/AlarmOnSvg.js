import React, { memo, forwardRef } from 'react';
const AlarmOnSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8.071 14c.945 0 1.715-.77 1.715-1.714h3a.863.863 0 00.857-.857c-.991-.837-2.143-2.337-2.143-5.572 0-1.286-1.065-2.692-2.84-2.953a.643.643 0 10-1.179 0c-1.773.261-2.838 1.667-2.838 2.953 0 3.235-1.152 4.735-2.143 5.572 0 .468.388.857.857.857h3c0 .944.77 1.714 1.714 1.714zm0-.536a1.18 1.18 0 01-1.178-1.178c0-.06.047-.107.107-.107s.107.046.107.107c0 .529.435.964.964.964.06 0 .108.047.108.107s-.047.107-.108.107z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(AlarmOnSvg);
