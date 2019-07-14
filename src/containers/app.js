
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppGeneratorContainer from '../appGenerator/appGeneratorContainer';
import '../style/index.css';

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
            </Switch>
        </Router>
    )
}
export default App
