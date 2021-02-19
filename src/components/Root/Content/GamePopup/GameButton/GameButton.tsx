import { Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles/";
import React from "react";

const useStyles = makeStyles({
  button: {
    textAlign: "center",
    "& + &": {
      marginLeft: "1.5rem",
    },
  },
});

interface GBProps {
  onClick?: any;
}

const GameButton: React.FC<GBProps> = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default GameButton;
