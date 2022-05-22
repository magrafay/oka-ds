import React from "react";
import { truncateMiddle, truncateText } from "../assets/js/_helper";
interface FbuttonProps {
  title?: any;
  variant?: String;
  btnInfo?: any;
  rounded?: any;
  outlined?: any;
  className?: String;
  onClick?: any;
  prefix?: any;
  postfix?: any;
  style?: any;
  type?: any;
  disabled?: boolean;
}
export const FButton = ({
  title,
  outlined,
  rounded,
  btnInfo,
  variant = "primary",
  className = "",
  onClick = () => {},
  prefix,
  postfix,
  style,
  type = "button",
  disabled = false,
}: FbuttonProps) => {
  return (
    <React.Fragment>
      {btnInfo ? (
        <div className="f-btn-wrap">
          <span className="f-btn-info">{btnInfo}</span>
          <button
            className={`f-btn f-btn-${variant} f-btn-${type} ${postfix ? "f-pl--7" : ""} ${prefix ? "f-pr--7" : ""} 
            ${rounded && "f-btn-rounded"} ${outlined && "f-btn-outlined"} ${className} `}
            onClick={onClick}
            style={style ? { ...style } : undefined}
            type={type}
            disabled={disabled}>
            {prefix && <span className="f-btn-icon f-prefix">{prefix}</span>}
            <span className="f-btn-title">{title}</span>
            {postfix && <span className="f-btn-icon f-postfix">{postfix}</span>}
          </button>
        </div>
      ) : (
        <button
          className={`f-btn f-btn-${variant} f-btn-${type} ${postfix ? "f-pl--7" : ""} ${prefix ? "f-pr--7" : ""} 
          ${rounded && "f-btn-rounded"} ${outlined && "f-btn-outlined"} ${className} `}
          onClick={onClick}
          style={style ? { ...style } : undefined}
          type={type}
          disabled={disabled}>
          {prefix && <span className="f-btn-icon f-prefix">{prefix}</span>}
          <span className="f-btn-title">{title}</span>
          {postfix && <span className="f-btn-icon f-postfix">{postfix}</span>}
        </button>
      )}
    </React.Fragment>
  );
};
