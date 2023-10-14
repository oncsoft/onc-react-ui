import React, { memo } from 'react';
const FaceIdSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <defs>
      <path id="FaceIdSvg_svg__a" d="M0 0h5.333v5.333H0z" />
      <path id="FaceIdSvg_svg__c" d="M0 0h5.333v5.333H0z" />
    </defs>
    <g fill="currentColor">
      <path
        d="M.773 5.333a.774.774 0 00.773-.772V2.862c0-.75.566-1.316 1.317-1.316H4.56A.774.774 0 004.56 0H2.863A2.832 2.832 0 000 2.862v1.699c0 .426.347.772.773.772M13.137 0H11.44a.774.774 0 000 1.546h1.697c.751 0 1.317.566 1.317 1.316v1.699a.774.774 0 001.546 0V2.862A2.832 2.832 0 0013.137 0"
        fill="#D9D9D9"
      />
      <g transform="translate(0 10.667)">
        <mask id="FaceIdSvg_svg__b" fill="#fff">
          <use xlinkHref="#FaceIdSvg_svg__a" />
        </mask>
        <path
          d="M4.56 3.788H2.864c-.751 0-1.317-.566-1.317-1.317V.773A.774.774 0 000 .773V2.47a2.832 2.832 0 002.863 2.862H4.56a.774.774 0 000-1.545"
          fill="#D9D9D9"
          mask="url(#FaceIdSvg_svg__b)"
        />
      </g>
      <g transform="translate(10.667 10.667)">
        <mask id="FaceIdSvg_svg__d" fill="#fff">
          <use xlinkHref="#FaceIdSvg_svg__c" />
        </mask>
        <path
          d="M4.56 0a.774.774 0 00-.772.773V2.47c0 .75-.566 1.317-1.317 1.317H.773a.773.773 0 000 1.545H2.47a2.832 2.832 0 002.862-2.862V.773A.774.774 0 004.56 0"
          fill="#D9D9D9"
          mask="url(#FaceIdSvg_svg__d)"
        />
      </g>
      <path
        d="M4.144 6.136v1.089c0 .435.341.789.762.789.42 0 .762-.354.762-.79V6.137c0-.435-.342-.79-.762-.79s-.762.355-.762.79M11.188 8.014c.42 0 .762-.354.762-.79V6.137c0-.435-.342-.79-.762-.79s-.762.355-.762.79v1.089c0 .435.342.789.762.789M10.978 10.808a.776.776 0 00-.545-.248.801.801 0 00-.56.21c-.524.488-1.136.725-1.873.725-.737 0-1.35-.237-1.872-.725a.795.795 0 00-.561-.21.783.783 0 00-.507 1.353c.815.76 1.804 1.146 2.94 1.146s2.125-.385 2.94-1.146a.783.783 0 00.038-1.105M7.465 10.386h.267c.827 0 1.451-.623 1.451-1.45V6.129a.783.783 0 00-1.564 0v2.693h-.154a.783.783 0 000 1.564"
        fill="#D9D9D9"
      />
    </g>
  </svg>
));
export default memo(FaceIdSvg);
