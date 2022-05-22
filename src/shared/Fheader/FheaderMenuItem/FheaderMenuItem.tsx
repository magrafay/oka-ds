import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import IconArrow from "../../../assets/images/f-icons/icon-arrow-light.svg";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface FheaderMenuItemProps {
  move?: string;
  className?: any;
  to: string;
  title: string;
  target?: any;
  prefix?: any;
  postfix?: any;
  children?: any;
}
export const FHeaderMenuItem = ({
  title = "Menu Item",
  to = "/#",
  target = "_self",
  className = "",
  prefix,
  postfix,
  children = undefined,
}: FheaderMenuItemProps) => {
  const location = useLocation<any>();
  const history = useHistory<any>();
  const [subMenu, setSubMenu] = useState<any>(false);
  const submenuRef = useRef<any>();
  const submenuTogglerRef = useRef<any>();

  const headerMenuItemCollapsed = document.getElementsByClassName(
    "headerCollapseMenu-collapsed"
  );
  const headerMenuItemExpanded = document.getElementsByClassName(
    "headerCollapseMenu-expanded"
  );

  useEffect(() => {
    document.addEventListener("click", (event: any) => {
      event.stopPropagation();
      if (
        headerMenuItemCollapsed &&
        !submenuRef?.current?.contains(event.target)
      ) {
        setSubMenu(false);
      } else if (
        headerMenuItemExpanded &&
        submenuRef?.current?.contains(event.target)
      ) {
        setSubMenu(!subMenu);
      }
    });
  }, []);

  const openInNewTab = (url: any) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div
        ref={submenuRef}
        className={`f-header-menu-item ${children ? "has-child" : ""} ${
          subMenu ? "submenu-open" : ""
        } ${className} ${
          location.pathname.split("/").join("") === title.toLowerCase()
            ? "active"
            : ""
        } `}
      >
        <Link
          className="f-item-link"
          ref={submenuTogglerRef}
          to={"#"}
          onClick={(e: any) => {
            e.preventDefault();
            target === "_blank"
              ? openInNewTab(to)
              : children
              ? setSubMenu(!subMenu)
              : history.push(to);
          }}
        >
          {prefix ? (
            <span className="f-item-icon">{prefix}</span>
          ) : (
            <span className="f-item-icon">
              <RiCheckboxBlankCircleFill />
            </span>
          )}
          <span className="f-item-text">{title}</span>
          {postfix || children ? (
            <span className="f-item-icon ">
              {children ? (
                <img src={IconArrow} alt={"f-icon"} />
              ) : (
                <div> {postfix}</div>
              )}
            </span>
          ) : (
            ""
          )}
        </Link>

        {children}
      </div>
    </>
  );
};
