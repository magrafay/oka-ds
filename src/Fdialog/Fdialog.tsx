import React from "react";
import IconClose from "../assets/images/f-icons/icon-close-dialog.svg";
import DialogFuturistic from "../assets/images/dialog-futuristic-primary.svg";

interface FdialogProps {
  title?: String;
  size?: String;
  type?: String;
  position?: String;
  dialogId?: String;
  className?: String;
  variant?: String;
  show?: boolean;
  showClose?: boolean;
  onHide?: any;
  hide?: boolean;
  children?: any;
  id?: any;
  style?: any;
}

export const FDialog = ({
  title = "",
  size = "",
  type = "",
  dialogId = "",
  className = "",
  position = "center",
  id = "",
  showClose = true,
  show = false,
  variant = "dark",
  onHide,
  children,
}: FdialogProps) => {
  return (
    <div
      className={`f-dialog-main ${className} ${show ? "show" : ""} f-dialog-${type} f-dialog-${title.toLowerCase().split(" ").join("-")}  `}
      id={title.toLowerCase().split(" ").join("")}
      style={show ? { display: "block" } : { display: "none" }}>
      <div className={`f-dialog ${size ? `f-dialog-${size}` : ""} ${position ? `f-dialog-${position}` : ""}  ${className}`}>
        <div className={`f-dialog-content bg-${variant}`}>
          {variant.includes("futuristic") && (
            <div className={`img-futuristic top`}>
              <img src={DialogFuturistic} alt={`img-${variant}`} />
              <img src={DialogFuturistic} alt={`img-${variant}`} />
            </div>
          )}

          <div className="f-dialog-header">
            <h3>{title}</h3>
            {showClose && (
              <a className="close-dialog" onClick={onHide}>
                <img src={IconClose} alt="close-dialog" />
              </a>
            )}
          </div>
          <div className="f-dialog-body">{children}</div>

          {variant.includes("futuristic") && (
            <div className={`img-futuristic bottom`}>
              <img src={DialogFuturistic} alt={`img-${variant}`} />
              <img src={DialogFuturistic} alt={`img-${variant}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
