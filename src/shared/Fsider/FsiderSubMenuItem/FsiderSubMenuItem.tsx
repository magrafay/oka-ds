import React from "react";

interface FSiderSubMenuItemProps {
  children?: any;
}
export const FSiderSubMenuItem = ({
  children = undefined,
}: FSiderSubMenuItemProps) => {
  return (
    <>
      <div className={`f-sider-submenu-item`}>{children}</div>
    </>
  );
};
