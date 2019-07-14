
import React from 'react'
import '../style/index.css'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import AppGeneratorContainer from '../appGenerator/appGeneratorContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SiteApp from './siteApp';

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                <MuiThemeProvider theme={createMuiTheme({
        "background": "#121212",
        "surface": "#1d1d1d",
        "textColor": "#fff",
        "primary": "#bb86fc",
        "secondary": "#fff",
        "boxShadow": "auto",
        "searchColor": "#1d1d1d",
        "componentBarBackground": "#121212",
        "border": "1px solid #121212"})}>
            <div className='App' style={{background: '#121212'}}>
                <AppGeneratorContainer />
            </div>
        </MuiThemeProvider>
                </Route>
                <Route path='/preview'>
                    <SiteApp />
                </Route>
            </Switch>
        </Router>
    )
}
export default App
