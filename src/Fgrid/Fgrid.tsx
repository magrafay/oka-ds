import React, { useEffect, useState } from "react";

interface FgridProps {
  //grid Props
  layout?: String;
  className?: String;
  gridChildren?: any;
  spacing?: number;
  // grid items props
  style?: any;
  size?: Array<number>;
  dir?: String;
  alignX?: String;
  alignY?: String;
  width?: String;
  height?: String;
  children?: any;
}

var itemSpacing: any = 15;

export const FGrid = ({ layout = "grid", spacing, className, children }: FgridProps) => {
  useEffect(() => {
    if (spacing !== null && spacing !== undefined) {
      itemSpacing = spacing === 0 ? 0 : spacing;
    }
  }, [spacing]);
  return (
    <div className={`f-grid f-layout-${layout} ${className}`} style={{ marginRight: `-${itemSpacing}px`, marginLeft: `-${itemSpacing}px` }}>
      {children}
    </div>
  );
};

export const FGridItem = ({ size = [12, 12, 12], alignX = "", alignY = "", className = "", style, dir, children = undefined }: FgridProps) => {
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
        } jc jc-${alignX} ai ai-${alignY} ${className} dir-${dir ? dir : ""}`}
        style={
          style
            ? { ...style, paddingLeft: `${itemSpacing}px`, paddingRight: `${itemSpacing}px` }
            : { paddingLeft: `${itemSpacing}px`, paddingRight: `${itemSpacing}px` }
        }>
        {children}
      </div>
    </>
  );
};
