import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MovieIcon from "@material-ui/icons/Movie";
import { Nowshowing, UpComing } from "./Movies";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  secondColor: {
    color: "#FFA500",
  },
  headerText: {
    fontWeight: 800,
    marginTop: "30px",
    marginLeft: "30px",
  },
  root: {
    minWidth: 375,
    marginTop: "30px",
    cursor: "pointer",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    // height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function NowShowing() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography variant="h3" className={classes.headerText}>
          Up{` `}
          <span className={classes.secondColor}>Coming</span>
          <MovieIcon style={{ fontSize: "40px" }} />
        </Typography>

        <Grid container spacing={4}>
          {Nowshowing.map((item) => (
            <Grid item lg="4" sm="12">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="subtitle1">{item.genere}</Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.about}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography variant="h6" component="p" lg="6">
                      {item.screen}
                    </Typography>
                    <Typography variant="h6" component="span">
                      Time : {item.time}
                    </Typography>
                  </div>
                  <Button color="secondary" fullWidth variant="contained">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" className={classes.headerText}>
          Now{` `}
          <span className={classes.secondColor}>Showing</span>
          <MovieIcon style={{ fontSize: "40px" }} />
        </Typography>

        <Grid container spacing={4}>
          {UpComing.map((item) => (
            <Grid item lg="4" sm="12">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="subtitle1">{item.genere}</Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.about}
                  </Typography>
                  <br />

                  <Button color="secondary" fullWidth variant="contained">
                    pre booking
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default NowShowing;
