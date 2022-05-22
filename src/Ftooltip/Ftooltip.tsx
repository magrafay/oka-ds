import React from "react";
import ReactTooltip from "react-tooltip";
import { FaInfo } from "react-icons/fa";
interface FtooltipProps {
  display?: String;
  icon?: any;
  text?: String;
  align?: String;
  multiline?: String;
  place?: any;
  effect?: any;
  offset?: any;
  event?: any;
  textColor?: any;
  backgroundColor?: any;
  className?: any;
  id: any;
  children?: any;
}
export const FTooltip = ({
  className = "",
  id = "",
  display = "inline-block",
  place = "top",
  effect = "solid",
  textColor = "",
  backgroundColor = "",
  offset,
  event,
  align = "none",
  icon = <FaInfo />,
  text = "Place your text here...",
  children,
}: FtooltipProps) => {
  return (
    <div className={`f-tooltip float-${align} d-${display} ${className}`}>
      <a data-tip={true} data-for={id}>
        {text && text !== "Place your text here..." ? text : icon}
      </a>
      <ReactTooltip
        place={place}
        effect={effect}
        event={event}
        offset={offset}
        textColor={textColor}
        backgroundColor={backgroundColor}
        id={id}
      >
        <span>{icon && !children ? children : children} </span>
      </ReactTooltip>
    </div>
  );
};
