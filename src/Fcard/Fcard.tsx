import React, { useState, useEffect, useRef } from "react";
import CardFuturisticPrimary from "../assets/images/card-futuristic-primary.svg";
import CardFuturisticSecondary from "../assets/images/card-futuristic-primary.svg";
interface FcardProps {
  variant?: String;
  className?: String;
  onClick?: any;
  children?: any;
  style?: any;
  width?: String;
  height?: String;
}
export const FCard = ({ variant = "primary", className = "", children = undefined, style = undefined, width, height }: FcardProps) => {
  const card = useRef<any>("");
  const [cardSize, setCardSize] = useState<number>(0);

  useEffect(() => {
    console.log("width", card.current.offsetWidth);
    setCardSize(card.current.offsetWidth);
  }, []);

  return (
    <div
      ref={card}
      className={`f-card f-card-${variant} ${className} ${variant.includes("futuristic") ? "f-card-bg" : ""} bg-${
        cardSize > 900 ? "contain" : "cover"
      }`}
      style={height || width ? { ...style, height: `${height}`, maxWidth: `${width}` } : undefined}>
      <div className="f-card-body">{children}</div>
    </div>
  );
};
