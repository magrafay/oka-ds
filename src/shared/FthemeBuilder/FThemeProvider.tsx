import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ThemeBuilder } from "./ThemeBuilder";
interface FThemeProviderProps {
  themeConfig?: any;
  setThemeConfig?: any;
  showThemeBuilder?: Boolean;
  children: any;
}

export const FThemeProvider = ({
  themeConfig,
  setThemeConfig,
  showThemeBuilder = false,
  children,
}: FThemeProviderProps) => {
  return (
    <ThemeProvider theme={themeConfig}>
      <ThemeBuilder
        config={themeConfig}
        onChange={(value: any) => {
          setThemeConfig({ ...value });
        }}
      />
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
