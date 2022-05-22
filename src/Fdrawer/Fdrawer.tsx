import React from "react";
import IconClose from "../assets/images/f-icons/icon-close-dialog.svg";

interface FdrawerProps {
  title?: String;
  size?: String;
  type?: String;
  position?: String;
  className?: String;
  show?: boolean;
  showClose?: boolean;
  onHide?: any;
  hide?: boolean;
  children?: any;
  id?: any;
  style?: any;
}

export const FDrawer = ({
  title = "",
  size = "",
  type = "",
  className = "",
  position = "center",
  id = "",
  showClose = true,
  show = false,
  onHide,
  children,
}: FdrawerProps) => {
  return (
    <div
      className={`f-drawer-main ${className} ${
        show ? "show" : ""
      } f-drawer-${type} f-drawer-${title.toLowerCase().split(" ").join("-")}`}
      id={title.toLowerCase().split(" ").join("")}
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div
        className={`f-drawer ${size ? `f-drawer-${size}` : ""} ${
          position ? `f-drawer-${position}` : ""
        } ${className}`}
      >
        <div className={`f-drawer-content `}>
          <div className="f-drawer-header">
            <h3>{title}</h3>
            {showClose && (
              <span className="close-drawer" onClick={onHide}>
                <img src={IconClose} alt="close-drawer" />
              </span>
            )}
          </div>
          <div className="f-drawer-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
