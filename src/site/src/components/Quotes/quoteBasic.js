import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        data: state.applicationManager.componentsData.QuoteBasic
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
        width: '80%',
        margin: '6em auto',
        padding: '2em',
        background: theme.background,
        color: '#fff',
        boxShadow: 'none'
    },
    quote: {
        fontFamily: 'GoogleSans',
        textAlign: 'center',
        color: theme.textColor
    },
    author: {
        marginTop: '1em',
        textAlign: 'center',
        color: theme.textColor
    }
}))

const QuoteBasic = (props) => {
    const { data } = props
    const classes = useStyles()
    if(!data) return null
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant='h4' className={classes.quote}>{data.quote}</Typography>
                <Typography className={classes.author} component='p'>- {data.author} -</Typography>
            </Paper>
        </div>
    )
}

export default connect(mapStateToProps)(QuoteBasic)