import React, { useRef, useState } from "react";
// import Datatable, { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { FItem } from "../Fitem/Fitem";

interface FTableProps {
  className?: String;
  tableHeader?: any;
  tableBody?: any;
  paginationOpt?: any;
  rowsPerPage?: number;
  options?: Array<number>;
  pagination?: boolean;
  hasCheckbox?: boolean;
  children?: any;
  onScroll?: UIEvent;
}
export const FTable = ({
  className = "",
  tableHeader,
  tableBody,
  rowsPerPage = 5,
  pagination = true,
  paginationOpt,
  options = [5, 10, 25, 50, 100],
  children = undefined,
}: FTableProps) => {
  const [headerFixed, setHeaderFixed] = useState<boolean>(false);
  const scrollRef = useRef(null);
  return (
    // <DatatableWrapper
    //   body={tableBody}
    //   headers={tableHeader}
    //   paginationOptionsProps={{ initialState: { rowsPerPage: rowsPerPage, options: options } }}>
    //   {/* <Filter /> */}
    //   <div className={`f-table ${headerFixed ? "sticky-table" : ""} ${className}`}>
    //     <PerfectScrollbar onScroll={(e: any) => (e.target.scrollTop > 50 ? setHeaderFixed(true) : setHeaderFixed(false))}>
    //       <div ref={scrollRef}></div>
    //       {/* {children} */}
    //       <table>
    //         <TableHeader />
    //         <TableBody />
    //       </table>
    //       <div className={`table-footer`}>
    //         {paginationOpt && <PaginationOptions />}
    //         <span></span>
    //         {pagination && <Pagination />}
    //       </div>
    //     </PerfectScrollbar>
    //   </div>
    // </DatatableWrapper>
    <></>
  );
};
