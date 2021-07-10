import RadioGroup from "@material-ui/core/RadioGroup";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

import FormLabel from "@material-ui/core/FormLabel";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { useForm } from "react-hook-form";
import { blue } from "chalk";
import { useState } from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ff00",
    },
    secondary: purple,
  },
  menu: {
    position: "absolute",
    top: 0,
    marginLeft: "-20",
  },
  typography: {
    // fontFamily: "Zen Tokyo Zoo",
    fontFamily: "Quicksand",
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    align: "center",
    marginLeft: "auto",
    backgroundColor: "brown",

    marginRight: "auto",

    "& .MuiTypography-root": {
      color: "white",
    },
  },
  root1: {
    maxWidth: 345,
    marginTop: "55px",
  },
  drawer: {
    width: "150px",
  },
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
  flex: {
    display: "flex",
  },
});

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(true);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [category, setCategory] = useState("");

  const onSubmit = (data) => {
    if (lastName == "") setLastNameError(true);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.flex}>
        <div>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawer }}
          >
            <div>
              <Typography variant="h5">Ninja Notes</Typography>
            </div>
          </Drawer>
        </div>

        {/* side drawer
        <div className="menu">
          <MenuIcon onClick={() => setIsOpen(true)} />
        </div>
        <Drawer
          className={classes.drawer}
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          Hello world
        </Drawer> */}
        <div>
          <Typography
            color="secondary"
            // noWrap
            // color="primary"
            align="center"
            // variant="h1"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie porta sem, sed tristique massa dignissim nec. Aliquam
            vestibulum, magna at facilisis dapibus, tortor leo rutrum velit, sed
            pretium tellus sem sed sapien. In suscipit orci lectus, vel
            elementum felis tempor id.
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
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className={classes.textIn}
              color="secondary"
              variant="outlined"
              fullWidth
              required
              label="Note Title"
              placeholder="enter title"
            />
            <TextField
              className={classes.field}
              // className={classes.title}
              variant="outlined"
              fullWidth
              required
              label="Details"
              multiline
              rows={3}
              // error={true}
              // or
              // error={detailsError}

              placeholder="enter name"
              helperText="invalid name"
              {...register("details", {
                required: "details mandatory",
              })}
            />
            <TextField
              {...register("example", { required: "input madatory" })}
              error={(errors.example?.message && true) || false}
              helperText={errors.example?.message || ""}
            />

            <TextField
              className={classes.field}
              variant="outlined"
              fullWidth
              required
              label="Last Name"
              multiline
              error={lastNameError}
              placeholder="enter last name"
              onChange={async (e) => {
                await setLastName(e.target.value);
                if (lastName == "") setLastNameError(true);
                else setLastNameError(false);
              }}
              // helperText="invalid name"
            />

            <FormControl className={classes.field}>
              <FormLabel component="legend">Category</FormLabel>
              <RadioGroup
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <FormControlLabel
                  control={<Radio />}
                  value="money"
                  label="Money"
                />

                <FormControlLabel
                  control={<Radio />}
                  value="goal"
                  label="Goal"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="secondary" type="submit">
              submit
            </Button>
            {category}
          </form>

          <Grid container>
            <Grid item xs={12}>
              <Paper>1</Paper>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Paper>1</Paper>
              {3}
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Paper>1</Paper>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Paper>1</Paper>
            </Grid>
          </Grid>
          <Typography align="center">
            <Card spacing={4} className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Ayirathil oruvan"
                subheader="This movie with the plot of exploring cholas dynasty in pasts"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Typography>

          <Card spacing={4} className={classes.root1} elevation={9}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Ayirathil oruvan"
              subheader="This movie with the plot of exploring cholas dynasty in pasts"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
