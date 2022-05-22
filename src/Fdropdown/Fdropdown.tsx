import React from "react";
import { FButton } from "..";

interface FdropdownProps {
  title?: String;
  size?: String;
  dropdownId?: String;
  className?: String;
  show?: boolean;
  onHide?: any;
  hide?: boolean;
  children?: any;
  id?: any;
}

export const FDropdown = ({
  title = "",
  size = "",
  dropdownId = "",
  className = "",
  id = "",
  show = false,
  onHide,
  children,
}: FdropdownProps) => {
  return (
    <div className={`f-dropdown ${className} ${show ? "show" : ""}`}>
      <div className="f-dropdown-menu">{children}</div>
    </div>
  );
};
