import React from "react";
import { useHistory } from "react-router-dom";

import brandingLogo from "../../components/codexlogo.png";
import "./editor.css";

import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "../../components/MaterialTheming";

import EditorBody from "./components/EditorBody";

import firebase from "../../components/firebase.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editorPage: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridGap: "14px",
      gridTemplateRows: "auto 1fr"
    },
    brandingLogo: {
      cursor: "pointer"
    },
    header: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      "& > *": {
        margin: "auto 0"
      }
    },
    codeTitle: {
      color: "#2196F3",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      textAlign: "center",
      height: "100%",
      width: "100%"
    },
    body: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateRows: "70% 30%"
    }
  })
);

function Editor(props) {
  const classes = useStyles();
  const history = useHistory();
  const [className, setClassName] = React.useState(""),
    [notOwner, setNotOwner] = React.useState(false);

  // let notOwner = true;

  // function setNotOwner(bool) {
  //   notOwner = bool;
  // }

  React.useEffect(() => {
    firebase
      .database()
      .ref("CodeX/" + props.match.params.editorID + "/className")
      .once("value")
      .then((snap) => {
        setClassName(snap.val());
      });
    if (
      localStorage.getItem("codex-codes") &&
      JSON.parse(localStorage.getItem("codex-codes"))[
        props.match.params.editorIndex
      ].key === props.match.params.editorID
    )
      setNotOwner(true);
  }, []);

  React.useEffect(() => {
    if (className.trim() !== "" && notOwner) {
      firebase
        .database()
        .ref("CodeX/" + props.match.params.editorID + "/className")
        .set(className);

      console.log(localStorage.getItem("codex-codes"));
      if (localStorage.getItem("codex-codes")) {
        let classNames = JSON.parse(localStorage.getItem("codex-codes"));
        classNames[props.match.params.editorIndex].name = className;
        localStorage.setItem("codex-codes", JSON.stringify(classNames));
      }
    }
  }, [className]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.editorPage}>
        <div className={classes.header}>
          <img
            className={classes.brandingLogo}
            src={brandingLogo}
            alt="branding-logo"
            onClick={() => {
              history.push("/");
            }}
          />
          <input
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
            }}
            className={classes.codeTitle}
            spellCheck={false}
            readOnly={!notOwner}
          />
        </div>
        <EditorBody
          storeAt={"CodeX/" + props.match.params.editorID}
          index={props.match.params.editorIndex}
        />
      </div>
    </ThemeProvider>
  );
}

export default Editor;
