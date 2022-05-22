import React from "react";
import logo from "../../assets/images/ferrum-brand-logo.png";

interface FheaderProps {
  headerLogo?: any;
  showLogo?: boolean;
  headerSearch?: any;
  titleText?: String;
  hasSider?: boolean;
  className?: String;
  children?: any;
}

export const FHeader = ({
  headerLogo = logo,
  headerSearch,
  titleText = "",
  showLogo = false,
  hasSider = false,
  className = "",
  children = undefined,
}: FheaderProps) => {
  return (
    <>
      <header className={`f-header f-layout-component ${className}`}>
        <div className="f-logo f-mobile">
          <img src={headerLogo ? headerLogo : logo} alt="Logo" />
        </div>
        {showLogo === true && headerLogo && (
          <>
            <div className="f-logo">
              <img src={headerLogo} alt="Logo" />
            </div>
          </>
        )}
        {headerSearch && (
          <div className="form-group">
            <input type="text" className="form-control"></input>
          </div>
        )}
        {titleText && <h3 className="f-header-title m-0 mx-4">{titleText}</h3>}
        <div className="f-header-items">{children}</div>
      </header>
    </>
  );
};
