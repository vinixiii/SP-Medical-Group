import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function Logo(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={100} height={100} rx={6} fill="#fff" />
      <Rect
        x={37.127}
        y={15.961}
        width={20.171}
        height={72.038}
        rx={2}
        fill="#007FA3"
        stroke="#007FA3"
        strokeWidth={2}
      />
      <Rect
        x={83.902}
        y={43.395}
        width={20.212}
        height={71.902}
        rx={2}
        transform="rotate(90 83.902 43.395)"
        fill="#007FA3"
        stroke="#007FA3"
        strokeWidth={2}
      />
      <Rect
        x={87}
        y={40.394}
        width={20.212}
        height={71.902}
        rx={2}
        transform="rotate(90 87 40.394)"
        fill="#fff"
        stroke="#215A58"
        strokeWidth={2}
      />
      <Rect
        x={40.083}
        y={13}
        width={20.171}
        height={72.038}
        rx={2}
        fill="#fff"
        stroke="#215A58"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default Logo;
