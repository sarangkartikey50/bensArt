import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core";
import LightPreviewVideo from '../resources/videos/light-preview-loader.gif'
import DarkPreviewVideo from '../resources/videos/dark-preview-loader.gif'

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
    }
}))

export default function PreviewLoader(props) {
  const classes = useStyle()
  return (
    <div>
      <div
        id="video"
        className={classes.video}
        data-silent="true"
        style={{backgroundImage: `url('${DarkPreviewVideo}')`}}
      ></div>
      <Typography className={classes.text}>Please wait... Generating preview!</Typography>
    </div>
  );
}
