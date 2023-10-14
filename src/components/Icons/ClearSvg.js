import React, { memo, forwardRef } from 'react';
const ClearSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M6.592 6.753a.541.541 0 01.771-.142c.25.18.312.539.137.798-.09.136-2.03 2.978-4.404 3.386.26.397.756.972 1.655 1.643.605-.177 1.458-.595 2.14-1.584 0 0-.4 1.523-1.157 2.251.206.128.425.257.661.389.236.13.461.248.677.356.167-1.056 1.17-2.245 1.17-2.245a4.2 4.2 0 00-.09 2.725c1.033.403 1.769.514 2.235.519-.984-2.276.228-5.522.286-5.675a.546.546 0 01.718-.323.581.581 0 01.314.744c-.013.036-1.348 3.621.009 5.316a.59.59 0 01-.167.877c-.075.042-.431.212-1.129.212-.899 0-2.37-.284-4.546-1.494-3.862-2.148-4.149-3.992-4.17-4.194a.586.586 0 01.162-.465.548.548 0 01.45-.164c2.108.232 4.256-2.9 4.278-2.93zm.971-1.589c.578-.299 1.16-.294 1.732.015.734.397 1.466.797 2.19 1.211.853.487 1.202 1.468.87 2.395-.025.072-.06.14-.095.224L6.77 5.98a1.79 1.79 0 01.793-.815zm4.915-4.91c.14-.23.288-.293.55-.233.242.056.442.18.587.389.096.137.111.28.044.444-.657 1.532-1.31 3.065-1.965 4.598l-.041.068-1.718-.95c-.013-.007-.02-.021-.036-.04.025-.043.048-.087.075-.131L12.478.255z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ClearSvg);
