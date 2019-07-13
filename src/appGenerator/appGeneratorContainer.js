import React, {useEffect} from 'react'
import CustomAppBar from './customAppBar';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SideBar from './sideBar';
import ComponentsContainer from './componentsContainer';
import { connect } from 'react-redux'
import { updateComponentsData } from '../actions'

const useStyle = makeStyles(theme => ({
    grid: {
        height: 'calc(100vh - 65px)'
    },
    paper: {
        height: '100%',
        boxShadow: 'none',
        border: '1px solid #efefef'
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