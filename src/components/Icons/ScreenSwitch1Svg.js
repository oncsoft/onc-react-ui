import React, { memo } from 'react';
const ScreenSwitch1Svg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.875 9.5c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 019.5 12.875v-2.25c0-.621.504-1.125 1.125-1.125h2.25zm0 .938h-2.25a.188.188 0 00-.178.128l-.01.059v2.25c0 .083.054.153.129.178l.059.01h2.25a.188.188 0 00.178-.129l.01-.059v-2.25a.188.188 0 00-.129-.178l-.059-.01zM4.259 7.74c.142 0 .258.116.258.259v3.19c0 .19.155.344.345.344h2.876l-.507-.506a.259.259 0 11.366-.366l.948.948a.259.259 0 010 .366l-.948.948a.259.259 0 01-.366-.366l.507-.506H4.862A.862.862 0 014 11.19V8c0-.143.116-.259.259-.259zm4.5-4.665a.259.259 0 010 .366l-.506.506h2.876c.476 0 .862.386.862.862V8a.259.259 0 01-.518 0V4.81a.345.345 0 00-.344-.344H8.253l.507.506a.259.259 0 01-.366.366l-.948-.948a.259.259 0 010-.366l.948-.948a.259.259 0 01.366 0zM5.376 2C5.996 2 6.5 2.504 6.5 3.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 012 5.375v-2.25C2 2.504 2.504 2 3.125 2h2.25zm0 .938h-2.25a.188.188 0 00-.178.128l-.01.059v2.25c0 .083.054.153.129.178l.059.01h2.25a.188.188 0 00.178-.129l.01-.059v-2.25a.188.188 0 00-.129-.178l-.059-.01z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ScreenSwitch1Svg);