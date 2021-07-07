import { TextField } from "@material-ui/core";
import React from "react";
function Input(props) {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error
      helperText="some validation error.."
    />
  );
}

export default Input;
