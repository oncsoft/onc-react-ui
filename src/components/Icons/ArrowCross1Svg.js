/* eslint-disable */
import React, { memo, forwardRef } from 'react';
const ArrowCross1Svg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M11.89 11.89c.184-.186.29-.44.3-.69l.126-6.966a.937.937 0 00-.27-.673.968.968 0 00-.679-.276l-.802.015c-.251.01-.504.116-.69.302a1.011 1.011 0 00-.295.684l-.06 3.143-3.692-3.692c-.367-.368-.987-.356-1.369.025l-.697.697c-.38.382-.393 1.002-.025 1.369L7.429 9.52l-3.143.06c-.246.004-.5.11-.684.296a1.045 1.045 0 00-.302.69l-.01.796a.914.914 0 00.95.95l6.965-.127c.246-.004.499-.11.684-.296z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ArrowCross1Svg);
