import { makeStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "#root/store/ducks/session";

import GamePopup from "./GamePopup";
import ScoresTable from "./ScoresTable";

const useStyles = makeStyles({
  main: {
    marginTop: "5rem",
    width: "100vw",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Content: React.FC = () => {
  const classes = useStyles();
  const [scores, setScores] = useState<any[]>([]);
  const { session } = useSelector(
    ({ session }: { session: ReduxState }) => session
  );

  const onSpin = (values: number[]) => {
    const newScore = {
      id: session ? session : "GUEST",
      s1: values[0],
      s2: values[1],
      s3: values[2],
      d: format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS"),
    };
    setScores(old => [...old, newScore]);
  };

  return (
    <main className={classes.main}>
      <ScoresTable title="Score board" content={scores} />
      <GamePopup dialogTitle="Online casino" onSpin={onSpin} />
    </main>
  );
};

export default Content;
