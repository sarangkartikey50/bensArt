import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold'
  },
  appBar: {
    background: theme.surface,
    color: theme.textColor,
    boxShadow: "none"
  }
}));
export default function AppBarBasic(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <Button color="inherit">Lorem</Button>
          <Button color="inherit">dolor</Button>
          <Button color="inherit">consectetur</Button>
          <Button color="inherit">Donec</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
