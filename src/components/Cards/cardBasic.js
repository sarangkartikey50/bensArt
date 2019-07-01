import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    background: theme.surface,
    margin: "0 auto"
  },
  text: {
    color: theme.textColor,
    fontFamily: "GoogleSans",
    fontWeight: 500
  },
  action: {
    color: theme.primary,
    fontFamily: "GoogleSans"
  }
}));

export default function CardBasic(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.text} variant="h6">
          Nulla semper molestie tristique. Nulla facilisi. Mauris vitae aliquet
          arcu. Nullam a sagittis massa.
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.action} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
