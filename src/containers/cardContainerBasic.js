import React from "react";
import Grid from "@material-ui/core/Grid";
import CardBasic from "../components/Cards/cardBasic";
import { makeStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "2em auto 5em auto"
  },
  header: {
    color: theme.textColor
  },
  paper: {
    margin: "1em 2em",
    background: theme.surface,
    padding: "1em",
    width: "fit-content"
  }
}));

export default function CardContainerBasic(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.header} variant="h5">
          Vivamus condimentum
        </Typography>
      </Paper>
      <Grid className={classes.grid} container spacing={0}>
        <Grid item md={3} sm={12}>
          <CardBasic />
        </Grid>
        <Grid item md={3} sm={12}>
          <CardBasic />
        </Grid>
        <Grid item md={3} sm={12}>
          <CardBasic />
        </Grid>
        <Grid item md={3} sm={12}>
          <CardBasic />
        </Grid>
      </Grid>
    </div>
  );
}
