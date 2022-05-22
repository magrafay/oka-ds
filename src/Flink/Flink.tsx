import React from "react";
import { Link } from "react-router-dom";

interface FlinkProps {
  title?: String;
  variant?: String;
  className?: String;
  path?: any;
  onClick?: any;
  prefix?: any;
  postfix?: any;
}

export const FLink = ({
  title,
  path = "",
  variant = "primary",
  className = "",
  onClick = () => {},
  prefix,
  postfix,
}: FlinkProps) => {
  return (
    <>
      <Link
        to={`/${path}`}
        className={`f-link f-link-${variant} ${className}`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {prefix && <span className="f-btn-icon">{prefix}</span>}
        {title}
        {postfix && <span className="f-btn-icon">{postfix}</span>}
      </Link>
    </>
  );
};
