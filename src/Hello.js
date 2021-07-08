import React from "react";
import { Button } from "@material-ui/core";

function Hello() {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "red", color: "white" }}
      >
        Secondary
      </Button>
    </div>
  );
}

export default Hello;
