
import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import AppBarBasic from './components/AppBar/appBarBasic'
import LandingBasic from './components/Landing/landingBasic'
import QuoteBasic from './components/Quotes/quoteBasic'
import CardContainerBasic from './containers/cardContainerBasic'
import CardContainerComplex from './containers/cardContainerComplex'
import FooterBasic from './components/Footer/footerBasic'
const App = (props) => {
    return (
        <MuiThemeProvider theme={createMuiTheme({"background":"#121212","surface":"#1d1d1d","textColor":"#fff","primary":"#bb86fc","secondary":"#fff","accentBackground":"#fafafa","borderColor":"#696969"})}>
            <div className='App' style={{background: '#121212'}}>
                <AppBarBasic /><LandingBasic /><QuoteBasic /><CardContainerBasic /><CardContainerComplex /><FooterBasic />
            </div>
        </MuiThemeProvider>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
