import React from "react";

interface FContainerProps {
  width?: Number;
  type?: String;
  className?: String;
  children?: any;
}
export const FContainer = ({ width, type = "", className = "", children = undefined }: FContainerProps) => {
  return (
    <div className={`f-container ${type} ${className}`} style={{ maxWidth: `${width}px` }}>
      {children}
    </div>
  );
};
