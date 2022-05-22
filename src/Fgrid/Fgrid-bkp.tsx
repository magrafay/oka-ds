import React, { useEffect } from "react";

interface FgridProps {
  title?: String;
  layout?: String;
  className?: String;
  spacing?: number;
  children?: any;
}

var itemSpacing: any = 10;

export const FGrid = ({ layout = "grid", className = "", spacing, children }: FgridProps) => {
  useEffect(() => {
    if (spacing !== null && spacing !== undefined) {
      itemSpacing = 10 + spacing;
    }
  }, [spacing]);
  return (
    <div className={`f-grid f-layout-${layout} ${className}`} style={{ marginLeft: `-${spacing}px`, marginRight: `-${spacing}px` }}>
      {children}
    </div>
  );
};
