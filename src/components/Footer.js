import React from "react";
import footerimg from "./img/cantenn.png";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import CardMedia from "@material-ui/core/CardMedia";

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

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item lg="6" sm="12">
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={footerimg}
              title="Paella dish"
            />
          </Card>
        </Grid>

        <Grid item lg="6" sm="12">
          <Typography
            variant="h3"
            style={{ fontWeight: "700", marginTop: "110px" }}
          >
            Book your Food With Tickets and{` `}
            <span
              style={{
                color: "#FFA500",
              }}
            >
              Get 10% Offer
            </span>
          </Typography>
        </Grid>
      </Grid>
      <div>
      <Avatar alt="Remy Sharp" src= />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
    </div>
  );
}

export default Footer;
