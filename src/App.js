import React from "react";
import "./index.css";

import Routes from "./components/Routes";

import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dynamicPage: {
      height: "100%",
      width: "100%"
    }
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.dynamicPage}>
        <Routes />
      </div>
    </div>
  );
}
