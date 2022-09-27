import React from "react";

interface ICProp {
  color?: string;
  width: number;
  height?: number;
  className?: string;
}

export default function BackIC({color, ...props}: ICProp) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 512"
    >
      <path
        fillRule="nonzero"
        d="M512 256c0 70.68-28.66 134.7-74.98 181.02C390.7 483.34 326.68 512 256 512c-70.69 0-134.7-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 256 0c70.68 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.31 512 256zM280.33 146.96 171.3 256l109.03 109.04 40.52-40.51-68.51-68.52 68.52-68.52-40.53-40.53zm130.66 264.03c39.66-39.66 64.2-94.47 64.2-154.99 0-60.53-24.54-115.33-64.2-154.99-39.66-39.66-94.47-64.2-154.99-64.2-60.53 0-115.33 24.54-154.99 64.2-39.66 39.66-64.2 94.46-64.2 154.99 0 60.53 24.54 115.33 64.2 154.99 39.66 39.66 94.46 64.2 154.99 64.2 60.52 0 115.33-24.54 154.99-64.2z"
        fill={color === undefined ? "currentcolor" : color}
      />
    </svg>
  );
}
