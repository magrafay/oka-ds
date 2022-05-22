import React from "react";

interface FitemProps {
  display?: String;
  align?: String;
  alignX?: String;
  alignY?: String;
  size?: number;
  bgColor?: string;
  children?: any;
  className?: any;
}
export const FItem = ({
  className = "",
  display = "block",
  align = "",
  alignX = "",
  alignY = "",
  size,
  bgColor = "",
  children = undefined,
}: FitemProps) => {
  return (
    <>
      <div
        className={`f-item f-item-align-${align} d-${display} ${display === "block" ? "w-100" : ""}   ${
          display === "flex" ? `jc jc-${alignX} ai ai-${alignY}` : display
        } ${className}`}
        style={{ width: size, minWidth: size, height: size, background: bgColor }}>
        {children}
      </div>
    </>
  );
};
