import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles/";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import getRandomVal from "#root/helpers/getRandomVal";
import { setAmount } from "#root/store/ducks/session";

import GameButton from "./GameButton";
import GameSlot from "./GameSlot";

const useStyles = makeStyles({
  slots: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& + &": {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
  play: {
    marginTop: "5rem",
  },
});

const GamePopup = ({ dialogTitle, onSpin: storeOnTable }: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [vals, setVals] = useState<number[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const res = vals.join("");

    if (["112", "122"].indexOf(res) !== -1) {
      dispatch(setAmount(0.5));
    } else if (
      ["111", "222", "333", "444", "555", "666", "888", "999"].indexOf(res) !==
      -1
    ) {
      dispatch(setAmount(5));
    } else if (res == "777") {
      dispatch(setAmount(10));
    }
    if (res !== "") storeOnTable(vals);
  }, [vals]);

  const handleSpin = () => {
    dispatch(setAmount(-1));
    setVals([getRandomVal(), getRandomVal(), getRandomVal()]);
  };

  const handleFake = () => {
    setVals([7, 7, 7]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={classes.play}
        color="primary"
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Play
      </Button>

      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <div>
            <div className={classes.slots}>
              <GameSlot value={vals[0]} />
              <GameSlot value={vals[1]} />
              <GameSlot value={vals[2]} />
            </div>

            <div className={classes.slots}>
              <GameButton onClick={handleSpin}>SPIN</GameButton>
              <GameButton onClick={handleFake}>FAKE</GameButton>
              <GameButton onClick={handleClose}>CLOSE</GameButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GamePopup;
