import { makeStyles } from "@material-ui/core/styles/";
import React from "react";

const useStyles = makeStyles({
  slot: {
    height: "10rem",
    width: "10rem",
    borderStyle: "solid",
    borderWidth: "0.3rem",
    fontSize: "6rem",
    verticalAlign: "middle",
    textAlign: "center",
    "& + &": {
      marginLeft: "3rem",
    },
  },
});

interface GSProps {
  value: number;
}

const GameSlot: React.FC<GSProps> = ({ value }) => {
  const classes = useStyles();

  return <div className={classes.slot}>{value}</div>;
};

export default GameSlot;
