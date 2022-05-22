import React, { useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface FTableProps {
  className?: String;
  children?: any;
  onScroll?: UIEvent;
}
export const FTable = ({ className = "", children = undefined }: FTableProps) => {
  const [headerFixed, setHeaderFixed] = useState<boolean>(false);
  const scrollRef = useRef(null);
  return (
    <>
      {children && (
        <PerfectScrollbar
          style={{ maxHeight: "80vh" }}
          onScroll={(e: any) => (e.target.scrollTop > 50 ? setHeaderFixed(true) : setHeaderFixed(false))}>
          <div className={`f-table ${headerFixed ? "sticky-header" : ""} ${className}`}>
            <div ref={scrollRef}></div>
            {children}
          </div>
        </PerfectScrollbar>
      )}
    </>
  );
};
