import { makeStyles } from "@material-ui/core/styles/";
import React from "react";

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    display: "flex",
    zIndex: 2,
    marginBottom: "1rem",
  },
  inlineBlock: {
    color: "inherit",
    display: "inline-block",
    width: "auto",
  },
  container: {
    margin: "2rem auto auto auto",
    float: "left",
    display: "block",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        &copy; {new Date().getFullYear()}
        {` `}
        <a
          href="https://www.linkedin.com/in/jhonatanmacazana/"
          className={classes.inlineBlock}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jhonatan Macazana
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
