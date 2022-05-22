import React from "react";

interface FiconProps {
  image?: any;
  children?: any;
}

export const FIcon = ({ image, children }: FiconProps) => {
  return <div className="f-icon f-icon-color">{image ? <img src={image} alt="icon" /> : children}</div>;
};
