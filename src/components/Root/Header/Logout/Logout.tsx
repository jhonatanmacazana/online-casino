import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearSession, ReduxState } from "#root/store/ducks/session";

const useStyles = makeStyles({
  button: {
    margin: "1rem",
  },
});

const Logout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { session } = useSelector(
    ({ session }: { session: ReduxState }) => session
  );

  const onLogout = () => {
    dispatch(clearSession());
  };
  return (
    <>
      <div>{session}</div>
      <Button
        className={classes.button}
        color="primary"
        onClick={onLogout}
        variant="contained"
        type="submit"
      >
        Logout
      </Button>
    </>
  );
};

export default Logout;
