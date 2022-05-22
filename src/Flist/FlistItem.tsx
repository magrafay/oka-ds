import React from "react";

interface FlistItemProps {
  display?: String;
  children?: any;
  className?: any;
  onClick?:any;
}
export const FListItem = ({
  children = undefined,
  display = "block",
  className = "",
  onClick = ()=>{

  }
}: FlistItemProps) => {
  return (
    <>
      <li className={`f-list-item d-${display} ${className}`} onClick={onClick}>{children}</li>
    </>
  );
};
