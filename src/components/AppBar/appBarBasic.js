import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CameraSharpIcon from '@material-ui/icons/CameraSharp'
import { connect } from 'react-redux'
import Logo from '../../resources/images/logo.svg'

const mapStateToProps = (state) => {
  return {
    data: state.applicationManager.componentsData.AppBarBasic
  }
}
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
function AppBarBasic(props) {
  const classes = useStyles();
  const { data } = props
  if(!data) return null
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <CameraSharpIcon /> <span className={classes.titleText}>{data.headerText}</span>
          </Typography>
          {data.items.map((item, index) => {
            return <Button key={index} as='a' href={item.url} className={classes.button} color="inherit">{item.name}</Button>
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default connect(mapStateToProps)(AppBarBasic)