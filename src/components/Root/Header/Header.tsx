import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { useSelector } from "react-redux";

import logo from "#root/assets/logo.png";
import { ReduxState } from "#root/store/ducks/session";

import Login from "./Login";
import Logout from "./Logout";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    height: "2rem",
    verticalAlign: "center",
  },
  amount: {
    color: "white",
  },
  logo: {
    margin: "0.35rem 0.5rem",
    width: "3.5rem",
  },
  title: {
    width: "3.5rem",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "25vw",
    color: "white",
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  const { amount, session } = useSelector(
    ({ session }: { session: ReduxState }) => session
  );

  return (
    <AppBar>
      <Toolbar className={classes.header}>
        <div className={classes.title}>
          <img src={logo} className={classes.logo} alt="logo" />
        </div>

        <div className={classes.right}>
          <span className={classes.amount}>${amount}</span>
          {!session ? <Login /> : <Logout />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
