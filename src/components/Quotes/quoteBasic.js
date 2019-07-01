import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        width: '80%',
        margin: '3em auto',
        padding: '2em',
        background: theme.surface,
        color: '#fff'
    },
    quote: {
        fontSize: '1.3em',
        fontFamily: 'GoogleSans',
        fontWeight: 500
    }
}))

const QuoteBasic = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography className={classes.quote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed fringilla mi. Fusce facilisis facilisis vulputate. Curabitur eu tincidunt dui. Proin rhoncus, arcu et rutrum commodo.</Typography>
            </Paper>
        </div>
    )
}

export default QuoteBasic