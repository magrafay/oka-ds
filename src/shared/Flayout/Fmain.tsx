import React from "react";

interface FMainProps {
  className?: String;
  children?: any;
}
export const FMain = ({ className = "", children = undefined }: FMainProps) => {
  return <main className={`f-main ${className}`}>{children}</main>;
};
