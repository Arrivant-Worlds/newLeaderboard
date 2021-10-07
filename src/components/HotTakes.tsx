import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function HotTakes(props: any) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography
        className={classes.title1}
        align="center"
        variant="h2"
        color="White"
      >
        Project Eluune
      </Typography>
      <Typography className={classes.title2} variant="h4" color="white">
        Decoders Leaderboard
      </Typography>
      <Button
        style={{
          background: "pink",
          borderRadius: "25px",
          height: "84px",
          width: "318px",
          border: "1px none",
          fontSize: "293%",
          color: "white",
        }}
      >
        CLAIM
      </Button>
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    paddingTop: "150px",
    backgroundColor: "none",
    color: "ButtonShadow",
    height: "100vh",
  },
  title1: {
    padding: "10px",
  },
  title2: {
    padding: "10px",
  },
});
