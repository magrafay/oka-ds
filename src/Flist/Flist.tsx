import React from "react";

interface FlistProps {
  type?: String;
  display?: String;
  variant?: String;
  className?: String;
  children?: any;
}

export const FList = ({
  type = "none",
  display = "block",
  variant = "",
  className = "",
  children,
}: FlistProps) => {
  return (
    <ul
      className={`f-list f-list-style-${type} f-list-${variant} d-${display} ${className}`}
    >
      {children}
    </ul>
  );
};
