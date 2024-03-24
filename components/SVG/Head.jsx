import * as React from "react"
const HeadSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#9ca3af"
      strokeLinecap="square"
      strokeWidth={3}
      d="M24.5 24h-5.333v4H9.833c0-3.366.18-6.114-2.014-8.911a9.293 9.293 0 0 1-1.986-5.756A9.333 9.333 0 0 1 15.167 4c3.8 0 7.298 1.824 8.74 5.51 1.01 2.584 2.377 4.166 3.926 6.49L24.5 18v6Z"
    />
  </svg>
)
export default HeadSVG
