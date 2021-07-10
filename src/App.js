import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  drawer: {
    width: "150px",
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const classes = useStyles();
  return (
    <Container className={classes.flex}>
      <div className="menu">
        <MenuIcon onClick={() => setIsOpen(true)} />
      </div>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/*   paper component to increase the width of the sidebar */}
        <Paper className={classes.drawer}>Hello world</Paper>
      </Drawer>

      <div>
        <Typography
          color="secondary"
          // noWrap
          // color="primary"
          align="center"
          // variant="h1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
          porta sem, sed tristique massa dignissim nec. Aliquam vestibulum,
          magna at facilisis dapibus, tortor leo rutrum velit, sed pretium
          tellus sem sed sapien. In suscipit orci lectus, vel elementum felis
          tempor id.
        </Typography>
      </div>
    </Container>
  );
}

export default App;
