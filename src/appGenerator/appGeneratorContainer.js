import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { updateComponentsData } from '../actions';
import ComponentsContainer from './componentsContainer';
import CustomAppBar from './customAppBar';
import SideBar from './sideBar';

const useStyle = makeStyles(theme => ({
    grid: {
    },
    paper: {
        height: '100%',
        boxShadow: 'none',
        border: theme.border,
        background: theme.surface,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }
}))

function AppGeneratorContainer(props){
    const classes = useStyle()
    return(
        <div>
            <CustomAppBar />
            <Grid className={classes.grid} container>
                <Grid item md={3}>
                    <Paper className={classes.paper}>
                        <SideBar />
                    </Paper>
                </Grid>
                <Grid item md={9} style={{maxWidth: '74%', marginLeft: '1%'}}>
                    <Paper className={classes.paper}>
                        <ComponentsContainer />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default connect(null, { updateComponentsData })(AppGeneratorContainer)