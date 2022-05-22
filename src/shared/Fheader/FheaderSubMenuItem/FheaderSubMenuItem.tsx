import React from "react";

interface FheaderSubMenuItemProps {
  children?: any;
}
export const FHeaderSubMenuItem = ({ children = undefined }: FheaderSubMenuItemProps) => {
  return <div className={`f-header-submenu-item`}>{children}</div>;
};
