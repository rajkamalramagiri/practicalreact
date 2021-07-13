import Box from "@material-ui/core/Box";
import "./App.css";
import { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { ButtonGroup, Grid, Paper } from "@material-ui/core";

import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FormControlLabel } from "@material-ui/core";

import UploadButtons from "./UploadButtons";
import IconButton from "@material-ui/core/IconButton";

import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles({
  root: {
    backgroundColor: "yellow",
    color: "black",
    borderRadius: "15px",
  },
});
function App() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h2"> Welcome to MUI</Typography>
        <Typography variant="body1"> Learn ui</Typography>
        <Typography variant="subtitle1"> Learn ui</Typography>
        <h2>Master</h2>
        {/* default Button */}
        <Button className={classes.root}>Save</Button>
        {/* contained buttons */}
        <Button variant="contained">Save</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <br></br>
        <br></br>
        <ButtonGroup>
          <Button variant="contained" color="primary">
            Save
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </ButtonGroup>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
        <Button variant="contained" color="primary" size="small" disabled>
          Small
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ fontSize: "34px", color: "blue", backgroundColor: "yellow" }}
        >
          Save
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Disable elevation
        </Button>
        <Button variant="outlined">Default</Button>
        <Button
          onClick={() => {
            alert("clicked");
          }}
        >
          Click me
        </Button>
        <UploadButtons />
        <div>
          {/* icons as buttons */}
          <IconButton
            aria-label="delete"
            size="large"
            color="primary"
            variant="contained"
          >
            <ArrowDownwardIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
        {/* adding icons at button start and end */}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<CloudUploadIcon />}
        >
          Send
        </Button>

        <ButtonGroup orientation="vertical" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical" color="primary" variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <div>
          <FormControlLabel
            label={"testing textbox"}
            control={
              <Checkbox
                checked={checked}
                // icon={<DeleteIcon />}
                icon={<SaveIcon />}
                checkedIcon={<SaveIcon />}
                onChange={(e) => setChecked(e.target.checked)}
                color={"primary"}
                // disabled
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
          />
        </div>
        <div>
          <TextField
            variant="filled"
            // variant="outlined"
            // color="primary"
            // type="date"
            // type="time"
            placeholder="abc@xyz.com"
            label="Email  "
          />

          <TextField
            id="standard-basic"
            label="Standard"
            style={{ backgroundColor: "yellow" }}
          />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField
            type="date"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            type="time"
            id="outlined-basic"
            label="Time"
            variant="filled"
          />
        </div>
        <Grid container spacing="2">
          <Grid item lg="6">
            <Paper style={{ height: 75, width: 50, backgroundColor: "blue" }} />
          </Grid>
          <Grid lg="6" item>
            <Paper style={{ height: 75, width: 50, backgroundColor: "blue" }} />
          </Grid>
          <Grid lg="6" item>
            <Paper style={{ height: 75, width: 50, backgroundColor: "blue" }} />
          </Grid>
          <Grid lg="6" item>
            <Paper style={{ height: 75, width: 50, backgroundColor: "blue" }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
