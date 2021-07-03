import "./App.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";

import { FormControlLabel } from "@material-ui/core";

import UploadButtons from "./UploadButtons";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <h2>Master</h2>
      {/* default Button */}
      <Button>Save</Button>
      {/* contained buttons */}
      <Button variant="contained">Save</Button>
      <Button variant="contained" color="primary">
        Save
      </Button>
      <Button variant="contained" color="secondary">
        Save
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
        Save
      </Button>
      <Button variant="contained" color="primary" size="small" disabled>
        Save
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
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="primary" endIcon={<CloudUploadIcon />}>
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
          color="secondary"
          // type="date"
          // type="time"
          placeholder="abc@xyz.com"
          label="Email  "
        />
      </div>
    </div>
  );
}

export default App;
