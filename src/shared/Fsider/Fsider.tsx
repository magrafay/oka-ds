import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "../../assets/images/ferrum-brand-logo.png";

interface FsiderProps {
  siderLogo?: string;
  showLogo?: boolean;
  FButton?: any;
  children?: any;
}

export const FSider = ({
  siderLogo = logo,
  showLogo = true,
  children = undefined,
}: FsiderProps) => {
  const [asideToggle, setAsideToggler] = useState<boolean>(true);
  const [FsilderLayoutState, setFsilderLayoutState] = useState<boolean>(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const fLayout = document.querySelector<any>(".f-layout");
    if (FsilderLayoutState) {
      fLayout.classList.add("f-layout-expanded");
      fLayout.classList.remove("f-layout-collapsed");
    } else {
      fLayout.classList.remove("f-layout-expanded");
      fLayout.classList.add("f-layout-collapsed");
    }
  }, [FsilderLayoutState]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window;

      setWindowDimensions({ width, height });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width < 991) {
      setAsideToggler(false);
    } else {
      setAsideToggler(true);
    }
  }, [windowDimensions]);

  return (
    <div className={`f-sider-outer`}>
      <div
        className={`desktop-aside-toggler btn btn-primary ${
          asideToggle ? "open" : ""
        }`}
        onClick={() => {
          setAsideToggler(!asideToggle);
          setFsilderLayoutState(!FsilderLayoutState);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside
        className={`f-sider f-layout-component ${
          asideToggle ? "sider-expanded" : "sider-collapsed"
        }`}
      >
        <div
          className={`f-mobile mobile-aside-toggler ${
            asideToggle ? "open" : ""
          }`}
          onClick={() => setAsideToggler(!asideToggle)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {showLogo === true && siderLogo && (
          <div className="f-logo">
            <img src={siderLogo} alt="Logo" />
          </div>
        )}
        <div className="f-sider-items">{children}</div>
      </aside>
    </div>
  );
};
