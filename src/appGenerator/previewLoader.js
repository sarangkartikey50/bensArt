import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core";
import PreviewVideo from '../resources/videos/preview-loader.mp4'

const useStyle = makeStyles(theme =>({
    video: {
        backgroundImage: "url('https://cdn.dribbble.com/users/1568450/screenshots/5996914/teamwork_12.png')",
        height: 600,
        backgroundSize: 'contain',
        display: 'block',
        margin: '0 auto'
    },
    text: {
        textAlign: 'center',
        fontSize: '20px'
    }
}))

export default function PreviewLoader(props) {
  const classes = useStyle()
  return (
    <div>
      <video
        id="video"
        playsinline="true"
        muted="true"
        autoplay="true"
        loop="true"
        className={classes.video}
        data-silent="true"
        src={PreviewVideo}
      />
      <Typography className={classes.text}>Please wait... Generating preview!</Typography>
    </div>
  );
}
