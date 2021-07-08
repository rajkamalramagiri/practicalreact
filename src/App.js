import "./App.css";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";
import { blue } from "chalk";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ff00",
    },
    secondary: purple,
  },
  typography: {
    // fontFamily: "Zen Tokyo Zoo",
    fontFamily: "Quicksand",
  },
});

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
    textColor: "#ffffff",
  },
  textIn: {
    color: "#ffffff",
    backgroundColor: "red",
    "& .MuiInputBase-input": {
      color: "#ffffff",
    },
    "& .MuiFormLabel-root": {
      color: "yellow",
    },
  },
  field: {
    marginTop: 80,
    marginBottom: 20,
    display: "block",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container>
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

        <Typography
          variant="h6"
          className={classes.title}
          color="primary"
          gutterBottom
        >
          Create a New Note
        </Typography>
        <Button variant="contained" className={classes.btn} color="secondary">
          Submit
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <br />
        <br />
        <br />
        <form noValidate autoComplete="off">
          <TextField
            className={classes.textIn}
            color="secondary"
            variant="outlined"
            fullWidth
            required
            label="title"
            placeholder="enter name"
          />
          <TextField
            className={classes.field}
            // className={classes.title}
            variant="outlined"
            fullWidth
            required
            label="title"
            placeholder="enter name"
          />
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
