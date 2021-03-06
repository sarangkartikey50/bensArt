import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CameraSharpIcon from '@material-ui/icons/CameraSharp';
import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    data: state.applicationManager.componentsData
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
  const { data, componentIndex } = props
  if(!data[componentIndex]) return null
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <CameraSharpIcon /> <span className={classes.titleText}>{data[componentIndex].data.headerText}</span>
          </Typography>
          {data[componentIndex].data.items.map((item, index) => {
            return <Button key={index} as='a' href={item.url} className={classes.button} color="inherit">{item.name}</Button>
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default connect(mapStateToProps)(AppBarBasic)