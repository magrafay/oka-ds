import React, { useState } from "react";
import { ReactComponent as IconClose } from "../assets/images/f-icons/f-icon-close.svg";

interface FResponseBarProps {
  className?: string;
  variant?: string;
  title?: string;
  onClose?: any;
}

export const FResponseBar = ({ className = "", variant = "", title = "" }: FResponseBarProps) => {
  const [show, setShow] = useState(true);
  return (
    <React.Fragment>
      {show && (
        <div className={`f-response-bar f-variant f-variant-${variant} ${className}`}>
          <span>{title}</span> <IconClose className="icon-close" onClick={() => setShow(!show)} />
        </div>
      )}
    </React.Fragment>
  );
};
