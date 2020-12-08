import { createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2196F3"
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      color: "white"
    },
    text: {
      primary: "#fff",
      hint: "#fff"
    },
    background: {
      paper: "#19202b"
    }
  }
});

export { darkTheme };
