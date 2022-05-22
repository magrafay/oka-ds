import React from "react";
import logo from "../../assets/images/ferrum-brand-logo.png";
interface FfooterProps {
  footerLogo?: any;
  className?: String;
  showLogo?: boolean;
  children?: any;
}

export const FFooter = ({ footerLogo = logo, showLogo = true, className = "", children = undefined }: FfooterProps) => {
  return (
    <>
      <footer className={`f-footer f-layout-component ${className}`}>
        {showLogo === true && footerLogo && (
          <>
            <div className="f-logo">
              <img src={footerLogo} alt="Logo" />
            </div>
          </>
        )}
        <div className="f-footer-items">{children}</div>
      </footer>
    </>
  );
};
