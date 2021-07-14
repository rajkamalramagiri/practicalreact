import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import landimg from "./img/land.jpg";
import {
  Button,
  Container,
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundPosition: "center",
    backgroundImage: `url(${landimg})`,
    backgroundSize: "cover",
  },

  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: 800,
  },
  secondColor: {
    color: "#FFA500",
  },
  headerText: {
    paddingTop: "200px",
    color: "white",
    fontWeight: 800,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Prasad <span className={classes.secondColor}>Cinemas</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container>
        <Typography variant="h2" spacing={10} className={classes.headerText}>
          Enjoy The Movie In <br />
          <span className={classes.secondColor}>4K RGB Projector</span>
        </Typography>
        <br />
        <Button variant="contained" color="secondary" size="large">
          BOOK YOUR TICKETS
        </Button>
      </Container>
    </div>
  );
}

export default Header;
