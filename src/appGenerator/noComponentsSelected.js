import React from 'react'
import StopScreenShareRoundedIcon from '@material-ui/icons/StopScreenShareRounded'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    icon: {
        fontSize: '3em',
        color: theme.textColor
    },
    text: {
        color: theme.textColor
    },
    root: {
        textAlign: 'center',
        display: 'inline-block',
        padding: '2em'
    }
}))

export default function NoComponentsSelected(){
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <StopScreenShareRoundedIcon className={classes.icon} />
            <Typography className={classes.text} component='p'>No components selected. Please select component using add button!</Typography>
        </div>
    )
}