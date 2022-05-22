import React, { useState } from "react";
import "../../assets/css/styles.min.css";
import { FThemeProvider } from "../FthemeBuilder/FThemeProvider";
import { defaultThemeConfig } from "../../shared/FthemeBuilder/ThemeBuilder";

interface FLayoutProps {
  FsiderLayoutState?: boolean;
  themeBuilder?: boolean;
  className?: String;
  fontFamily?: String;
  children?: any;
}
export const FLayout = ({
  FsiderLayoutState = false,
  fontFamily = "primary",
  themeBuilder = true,
  className = "",
  children = undefined,
}: FLayoutProps) => {
  const [themeConfig, setThemeConfig] = useState(defaultThemeConfig);

  return themeBuilder ? (
    <FThemeProvider themeConfig={themeConfig} setThemeConfig={setThemeConfig}>
      <div
        className={`f-layout f-layout-${FsiderLayoutState ? "shrink" : "expanded"} f-font-${
          fontFamily === "primary" ? fontFamily : fontFamily
        } ${className}`}>
        {children}
      </div>
    </FThemeProvider>
  ) : (
    <div className={`f-layout ${`f-layout-${FsiderLayoutState ? "shrink" : "expanded"}`} ${className}`}>{children}</div>
  );
};
