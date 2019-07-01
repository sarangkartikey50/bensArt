
import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import AppBarBasic from './components/AppBar/appBarBasic'
import LandingBasic from './components/Landing/landingBasic'
import QuoteBasic from './components/Quotes/quoteBasic'
import FooterBasic from './components/Footer/footerBasic'
const App = (props) => {
    return (
        <MuiThemeProvider theme={createMuiTheme({"background":"#0f111a","surface":"#21252b","textColor":"#fff","primary":"#4185F4","secondary":"#fff","accentBackground":"#fafafa","borderColor":"#696969"})}>
            <div className='App' style={{background: '#0f111a'}}>
                <AppBarBasic /><LandingBasic /><QuoteBasic /><FooterBasic />
            </div>
        </MuiThemeProvider>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
