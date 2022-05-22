import React from "react";
import { truncateText } from "../assets/js/_helper";

// enum truncatePositionEnums {
//   start = "start",
//   center = "center",
//   end = "end",
// }

interface FtypoProps {
  display?: String;
  width?: number;
  size?: number;
  lineHeight?: number;
  weight?: number;
  color?: string;
  family?: string;
  align?: String;
  alignX?: String;
  alignY?: String;
  truncate?: { truncateLength: number; truncatePosition: string };
  tuncatePosition?: any;
  children?: any;
  className?: any;
}

export const FTypo = ({
  className = "",
  display = "block",
  width,
  size = 16,
  lineHeight = size + 5,
  weight,
  color,
  family,
  align = "",
  alignX = "",
  alignY = "",
  truncate,

  children = undefined,
}: FtypoProps) => {
  return (
    <span
      className={`f-typo f-typo-align-${align} d-${display} ${display === "block" ? "w-100" : ""} ${
        display === "flex" ? `jc jc-${alignX} ai ai-${alignY}` : display
      } ${className}`}
      style={{
        fontSize: size,
        lineHeight: `${lineHeight}px`,
        fontWeight: weight,
        color: color,
        fontFamily: family,
        maxWidth: `${width}px`,
      }}
      title={children}>
      {truncate ? truncateText(children, truncate.truncateLength, truncate.truncatePosition) : children}
    </span>
  );
};
