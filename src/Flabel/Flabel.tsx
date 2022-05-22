import React from "react";

interface FlabelProps {
  display?: String;
  type?: String;
  text?: String;
  onClick?: any;
  children?: any;
  className?: any;
}
export const FLabel = ({
  display = "inline-block",
  type = "default",
  text = "Text Here",
  className = "",
  onClick = () => {},
  children = undefined,
}: FlabelProps) => {
  return (
    <>
      <span className={`f-label f-label-${type} d-${display} ${className}`} onClick={onClick}>
        {text}
      </span>
    </>
  );
};
