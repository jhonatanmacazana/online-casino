import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Column } from "react-virtualized";

import VirtualizedTable from "#root/components/shared/VirtualizedTable";

const useStyles = makeStyles({
  header: {
    // color: 'red',
    textTransform: "none",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tableContainer: {
    height: "18rem",
    width: "70vw",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const ScoresTable = ({ title, content }: any) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.section}>
        <h2>{title}</h2>
      </div>
      <VirtualizedTable
        content={content}
        classTableContainer={classes.tableContainer}
      >
        <Column
          dataKey="id"
          headerClassName={classes.header}
          label="ID"
          style={{ textAlign: "center" }}
          width={80}
          flexGrow={1}
        />
        <Column
          dataKey="s1"
          disableSort
          headerClassName={classes.header}
          label="Slot 1"
          style={{ textAlign: "center" }}
          width={100}
          flexGrow={1}
        />
        <Column
          dataKey="s2"
          disableSort
          headerClassName={classes.header}
          label="Slot 2"
          style={{ textAlign: "center" }}
          width={100}
          flexGrow={1}
        />
        <Column
          dataKey="s3"
          disableSort
          headerClassName={classes.header}
          label="Slots 3"
          style={{ textAlign: "center" }}
          width={100}
          flexGrow={1}
        />
        <Column
          dataKey="d"
          headerClassName={classes.header}
          label="Time"
          style={{ textAlign: "center" }}
          width={200}
          flexGrow={1}
        />
      </VirtualizedTable>
    </>
  );
};

export default ScoresTable;
