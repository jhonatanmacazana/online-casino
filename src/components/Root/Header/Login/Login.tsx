import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { setSession } from "#root/store/ducks/session";

const useStyles = makeStyles({
  button: {
    margin: "1rem",
  },
  nameInput: {},
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<{ name: string }>();

  const onSubmit = handleSubmit(({ name }) => {
    dispatch(setSession(name));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <Controller
        as={
          <TextField
            className={classes.nameInput}
            color="primary"
            disabled={isSubmitting}
            id="name"
            label="Name"
            placeholder="Name"
            type="text"
          />
        }
        control={control}
        defaultValue=""
        name="name"
      />
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
