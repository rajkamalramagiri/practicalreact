import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    overflowY: "scroll",
    position: "fixed",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <h2>sidemenu</h2>
      <h2>sidemenu</h2>
    </div>
  );
}

export default SideMenu;
