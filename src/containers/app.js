
import React from 'react'
import '../style/index.css'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import AppGeneratorContainer from '../appGenerator/appGeneratorContainer';

const App = (props) => {
    return (
        <MuiThemeProvider theme={createMuiTheme({"background": "#fff",
        "surface": "#fff",
        "textColor": "#333",
        "primary": "#6400e0",
        "secondary": "#333",
        "boxShadow": "none",
        "border": "1px solid #e0e0e0"})}>
            <div className='App' style={{background: '#fff'}}>
                <AppGeneratorContainer />
            </div>
        </MuiThemeProvider>
    )
}
export default App
