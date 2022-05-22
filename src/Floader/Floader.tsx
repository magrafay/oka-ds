import React from "react";
import loader from "../assets/images/f-loader.gif";
import loaderFuturistic from "../assets/images/f-loader-futuristic.gif";

interface FLoaderProps {
  loading?: boolean;
  loaderImage?: any;
  loaderText?: boolean;
  variant?: string;
  type?: string;
  width?: number;
}

export const FLoader = ({
  loading = false,
  loaderImage = loader,
  loaderText = true,
  type = "page",
  variant = "primary",
  width = 50,
}: FLoaderProps) => {
  return (
    <React.Fragment>
      {loading && (
        <div className={`f-loader f-loader-type-${type} f-loader-variant-${variant}`}>
          <img
            src={variant === "primary" ? loaderImage : variant === "futuristic" ? loaderFuturistic : loaderImage}
            alt="loading"
            style={{ width: `${width}px` }}
          />
          {loaderText && (
            <h3 className="loading-text">
              Loading{" "}
              <div className="dots">
                <div className="stage">
                  <div className="dot-pulse"></div>
                </div>
              </div>
            </h3>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
