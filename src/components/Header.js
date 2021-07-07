import { Badge, IconButton, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { AppBar, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    // transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
  // btnRoot: {
  //   "& .MuiIconButton-label": { backgroundColor: "green" },
  // },

  btnRoot: {
    "& .MuiIconButton-label": { backgroundColor: "green" },
    backgroundColor: "yellow",
  },
  btnLabel: {
    backgroundColor: "green",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder="Search"
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm>
            {" "}
          </Grid>

          <Grid item>
            <IconButton
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
              // className={classes.btnRoot}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
