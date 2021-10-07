import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function LeaderCard(props: any) {
  const classes = useStyles();
  return (
    <Card
      style={{ backgroundColor: "black" }}
      sx={{ maxWidth: 345 }}
      className={classes.root}
    >
      <CardActionArea href="https://twitter.com/" className={classes.root}>
        <CardMedia
          component="img"
          height="220"
          image="/images/example.png"
          className={classes.root}
          alt=""
        />
        <CardContent>
          <Typography>
            <Link href="#">{props.handle}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ mx: 15 }}>
        <Button
          size="large"
          style={{
            background: "pink",
            borderRadius: "12px",
            border: "1px none",
            color: "white",
          }}
          href="https://twitter.com/compose/tweet?text=@ProjectEluune Claiming my Hot Take."
        >
          Claim
        </Button>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "blue",
    color: "ButtonShadow",
  },
});
