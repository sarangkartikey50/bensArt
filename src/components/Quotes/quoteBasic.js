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
        fontFamily: 'GoogleSans',
        textAlign: 'center'
    },
    author: {
        marginTop: '1em',
        textAlign: 'center'
    }
}))

const QuoteBasic = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant='h4' className={classes.quote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed fringilla mi.</Typography>
                <Typography className={classes.author} component='p'>- Lorem Ipsum -</Typography>
            </Paper>
        </div>
    )
}

export default QuoteBasic