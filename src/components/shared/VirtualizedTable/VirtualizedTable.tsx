import { makeStyles } from "@material-ui/core/styles/";
import React, { useEffect, useState, useRef } from "react";
import "react-virtualized/styles.css";
import { AutoSizer, Table, SortDirection } from "react-virtualized";

const useStyles = makeStyles({
  header: { textAlign: "center" },
  tableContainer: {
    height: "24rem",
  },
  table: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  headerRow: {
    borderBottom: "1px solid #e0e0e0",
    backgroundColor: "#767575",
    color: "#fff",
    padding: 16,
  },
  evenRow: {
    borderBottom: "1px solid #e0e0e0",
    padding: 16,
  },
  oddRow: {
    borderBottom: "1px solid #e0e0e0",
    backgroundColor: "#fafafa",
    padding: 16,
  },
});

const VirtualizedTable = ({
  classTableContainer,
  children,
  rowHeight = 48,
  content = [],
}: any) => {
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  const [sortedList, setSortedList] = useState(content);
  const tableRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    setSortedList(content);
    // @ts-ignore
    tableRef.current.forceUpdate();
    // @ts-ignore
    tableRef.current.forceUpdateGrid();
  }, [content]);

  const sortList = ({ sortBy, sortDirection }: any) => {
    const sorted = content.sort((a: any, b: any) =>
      a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0
    );

    if (sortDirection === SortDirection.DESC) sorted.reverse();

    return sorted;
  };

  const sort = ({ sortBy, sortDirection }: any) => {
    const sortedList = sortList({ sortBy, sortDirection });
    setSortBy(sortBy);
    setSortDirection(sortDirection);
    setSortedList(sortedList);
  };

  return (
    <div className={classTableContainer}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            headerClassName={classes.header}
            headerHeight={rowHeight}
            height={height}
            ref={tableRef}
            rowClassName={({ index }) => {
              if (index < 0) {
                return classes.headerRow;
              } else {
                return index % 2 === 0 ? classes.evenRow : classes.oddRow;
              }
            }}
            rowCount={sortedList.length}
            rowGetter={({ index }) => sortedList[index]}
            rowHeight={rowHeight}
            sort={sort}
            sortBy={sortBy}
            sortDirection={sortDirection}
            width={width}
          >
            {children}
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default VirtualizedTable;
