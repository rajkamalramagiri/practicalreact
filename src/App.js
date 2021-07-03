import "./App.css";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { Button } from "@material-ui/core";

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
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container>
      {/* <Typography
        color="secondary"
        noWrap
        // color="primary"
        // align="center"
        // variant="h1"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
        porta sem, sed tristique massa dignissim nec. Aliquam vestibulum, magna
        at facilisis dapibus, tortor leo rutrum velit, sed pretium tellus sem
        sed sapien. In suscipit orci lectus, vel elementum felis tempor id.
        Suspendisse luctus quis odio ut molestie. Donec eget justo dui. Mauris
        faucibus mattis tellus, et fringilla purus commodo sed. Maecenas vitae
        neque sed justo egestas ultricies. Maecenas rhoncus lacinia ligula et
        aliquet. Nullam et tortor at neque vehicula ullamcorper vitae in orci.
        In eget turpis lorem. In hac habitasse platea dictumst. Quisque risus
        ex, tristique sit amet massa et, facilisis rhoncus nisl. In vitae nulla
        sapien. Proin vehicula dolor nec consectetur malesuada. Aliquam id leo
        fermentum, consequat lorem eget, ornare metus. Praesent vulputate odio
        diam, in rhoncus eros convallis et. Phasellus ut nisi sagittis turpis
        aliquet pellentesque. Sed aliquet quam eget sagittis rhoncus. Nam mollis
        turpis sed elit iaculis, eget volutpat ante lobortis. Morbi fermentum
        nisi libero, ac commodo nisi venenatis vel. Praesent a rhoncus sapien.
        In tincidunt ut mauris eget rutrum. Maecenas porta efficitur feugiat.
        Nulla consectetur libero tristique lectus ultricies, eu rhoncus justo
        placerat. Vivamus id elit blandit, scelerisque neque a, condimentum sem.
        In hac habitasse platea dictumst. Morbi fringilla scelerisque urna vitae
        elementum. Morbi ex urna, laoreet sit amet placerat ut, pellentesque in
        mauris. Cras nec metus eu ex mollis semper euismod sit amet libero. Nam
        blandit diam non sem sollicitudin interdum. Aenean eu massa mattis,
        egestas felis ac, feugiat augue. Donec felis ante, aliquam et augue ut,
        viverra scelerisque dolor. Pellentesque placerat leo risus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin vestibulum quis nunc sit amet feugiat. Nam turpis nisl,
        malesuada ac augue quis, fringilla varius augue. Mauris congue massa nec
        elit bibendum, at iaculis nibh imperdiet. Sed rhoncus nisi vitae
        fringilla rhoncus. Proin lobortis eu purus non faucibus. Maecenas nibh
        elit, convallis in libero et, dapibus egestas eros. Cras porta quis urna
        nec sollicitudin.
      </Typography> */}

      <Typography
        variant="h6"
        className={classes.title}
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button variant="contained" className={classes.btn} color="secondary">
        Submit
      </Button>
    </Container>
  );
}

export default App;
