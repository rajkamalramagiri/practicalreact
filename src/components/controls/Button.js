import React from "react";
import { Button as Muibutton, theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

function Button(props) {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <Muibutton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </Muibutton>
  );
}

export default Button;
