import React from "react";
import { FButton } from "..";

interface FdividerProps {
  variant?: String;
  axis?: String;
  children?: any;
  className?: any;
}
export const FDivider = ({
  children = undefined,
  axis = "x" || "y",
  variant = "button" || "item" || "list",
  className = "",
}: FdividerProps) => {
  return (
    <>
      <div
        className={`f-divider f-divider-${variant} f-divider-${axis} ${className}`}
      >
        <hr></hr>
        {children}
      </div>
    </>
  );
};
