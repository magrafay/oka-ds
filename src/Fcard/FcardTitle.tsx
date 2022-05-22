import React from "react";
interface FcardTitleProps {
  className?: String;
  align?: String;
  children?: any;
  size?: number;
}
export const FCardTitle = ({
  className = "",
  align = "",
  children = undefined,
}: FcardTitleProps) => {
  return (
    <>
      <div className={`f-card-title ${className} jc-${align}`}>{children}</div>
    </>
  );
};
