import * as React from "react"
const HouseSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="square"
      strokeWidth={3}
      d="M11.167 21.333h10.666M5.833 12v14.667h21.334V12L16.5 3.333 5.833 12Z"
    />
  </svg>
)
export default HouseSVG
