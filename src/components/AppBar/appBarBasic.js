import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CameraSharpIcon from '@material-ui/icons/CameraSharp'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  },
  appBar: {
    background: theme.surface,
    color: theme.textColor,
    boxShadow: "none"
  },
  button: {
    textTransform: 'capitalize',
    fontFamily: 'GoogleSans'
  },
  titleText: {
    marginLeft: 5
  }
}));
export default function AppBarBasic(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <CameraSharpIcon /> <span className={classes.titleText}>Pharetra</span>
          </Typography>
          <Button className={classes.button} color="inherit">Lorem</Button>
          <Button className={classes.button} color="inherit">Dolor</Button>
          <Button className={classes.button} color="inherit">Consectetur</Button>
          <Button className={classes.button} color="inherit">Donec</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
