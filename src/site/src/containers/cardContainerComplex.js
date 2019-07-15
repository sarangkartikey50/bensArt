import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";
import CardComplex from "../components/Cards/cardComplex";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    data: state.applicationManager.componentsData.CardContainerComplex
  }
}

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "2em auto 0em auto",
    paddingBottom: '5em'
  },
  header: {
    color: theme.textColor
  },
  paper: {
    margin: "1em 2em",
    background: theme.surface,
    padding: "1em",
    width: "fit-content",
    border: theme.border,
    boxShadow: theme.boxShadow
  }
}));
function CardContainerComplex(props) {
  const classes = useStyles();
  const { data } = props
  if(!data) return null
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.header} variant="h5">
          {data.header}
        </Typography>
      </Paper>
      <Grid className={classes.grid} container spacing={0}>
        {data.items.map((item, index) => {
          return (
            <Grid key={index} item md={4} xs={12}>
              <CardComplex data={item} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
export default connect(mapStateToProps)(CardContainerComplex)