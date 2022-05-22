import React from "react";

interface FgridItemProps {
  size?: Array<number>;
  dir?: String;
  alignX?: String;
  alignY?: String;
  style?: any;
  width?: String;
  height?: String;
  children?: any;
  className?: any;
}
export const FGridItem = ({ size = [12, 12, 12], dir = "row", alignX = "", alignY = "", className = "", children = undefined }: FgridItemProps) => {
  return (
    <>
      <div
        className={`f-grid-item ${
          size && size.length === 1
            ? `f-grid-item-lg-${size[0]}`
            : size.length === 2
            ? `f-grid-item-lg-${size[0]} f-grid-item-md-${size[1]}`
            : size.length === 3
            ? `f-grid-item-lg-${size[0]} f-grid-item-md-${size[1]} f-grid-item-sm-${size[2]}`
            : ""
        } dir-${dir} jc jc-${alignX} ai ai-${alignY} ${className} `}>
        {children}
      </div>
    </>
  );
};
