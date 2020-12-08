import React from "react";
import { useHistory } from "react-router-dom";

import { Button, makeStyles, createStyles, Theme } from "@material-ui/core";
import { DeleteRoundedIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    codeBlock: {
      display: "inline-block",
      height: "fit-content",
      width: "fit-content",
      borderRadius: "5px",
      border: "2px solid #2196F3",
      paddingBottom: "40px",
      cursor: "pointer",
      margin: "0px 4px 10px 4px",
      "& :hover": {
        color: "white"
      }
    },
    title: {
      color: "#2196F3",
      padding: 7,
      borderBottom: "2px solid #2196F3",
      fontSize: "14px"
    }
  })
);

function CodeBlock({ blockTitle, blockLang, blockLink }) {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = React.useState(blockTitle);

  return (
    <div
      className={classes.codeBlock}
      onClick={() => {
        history.push(blockLink);
      }}
    >
      <div className={classes.title}>{title + "." + blockLang}</div>
      {/* <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.runBtn}
        startIcon={<DeleteRoundedIcon />}
      >
        Delete
      </Button> */}
    </div>
  );
}

export default CodeBlock;
