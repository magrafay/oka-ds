import React, { useEffect, useLayoutEffect, useState } from "react";

interface FheaderCollapseProps {
  children?: any;
}

export const FHeaderCollapse = ({ children = undefined }: FheaderCollapseProps) => {
  const [asideToggle, setAsideToggler] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
      setAsideToggler(false);
    }
  }, [windowDimensions]);

  return (
    <React.Fragment>
      <div className={`header-collapse-toggler ${asideToggle ? "open" : ""}`} onClick={() => setAsideToggler(!asideToggle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`f-header-collapse f-layout-component ${asideToggle ? "expanded" : "collapsed"}`}>
        <div className="f-header-collapse-items">{children}</div>
      </div>
    </React.Fragment>
  );
};
