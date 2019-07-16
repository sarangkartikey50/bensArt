import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from "react";

const ColorLinearProgress = withStyles(theme => ({
  colorPrimary: {
    backgroundColor: theme.background,
  },
  barColorPrimary: {
    backgroundColor: '#551D82',
  },
}))(LinearProgress);

const useStyle = makeStyles(theme =>({
    video: {
        height: 'calc(100vh - 144px)',
        backgroundSize: 'cover',
        display: 'block',
        margin: '0 auto'
    },
    text: {
        textAlign: 'center',
        fontSize: '20px',
        color: theme.textColor,
        padding: '1em'
    },
    root: {
      flexGrow: 1
    }
}))

export default function PreviewLoader(props) {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <ColorLinearProgress />
    </div>
  );
}
