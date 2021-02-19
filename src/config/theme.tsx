// https://www.color-blindness.com/color-name-hue/
import { createMuiTheme } from "@material-ui/core/styles";
export const jade = "#00BF5F";

interface CustomProps {
  spreadThis?: any;
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions extends CustomProps {}

  interface Theme extends CustomProps {}
}

// const headerHeight = "";

export default createMuiTheme({
  palette: {
    type: "light",
    text: {
      primary: "#000",
    },
    background: {
      default: "#f2f2f2",
    },
    primary: {
      light: "#c3c3e5",
      //main: '#8c489f',
      //main: '#004fb9',
      main: "#003D74",
      dark: "#443266",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#d92027",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
  spreadThis: {
    // global custom styles
    header: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    },
  },
});
