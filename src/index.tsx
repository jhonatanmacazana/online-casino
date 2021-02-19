import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Root from "#root/components/Root";
import theme from "#root/config/theme";
import store from "#root/store";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>{" "}
  </Provider>,
  document.getElementById("app")
);
