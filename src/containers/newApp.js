
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import AppBarBasic from './src/components/AppBar/appBarBasic'
import FooterBasic from './src/components/Footer/footerBasic'
const lightTheme = createMuiTheme({
    palette: {
      main: grey[500],
      background: "#fff",
      text: "#333",
      primaryColor: "#4185F4",
      iconColor: "#333",
      accentBackground: "#fafafa",
      borderColor: "#efefef"
    }
})
const darkTheme = createMuiTheme({
    palette: {
        main: grey[500],
        background: "#0f111a",
        text: "#fff",
        primaryColor: "#4185F4",
        iconColor: "#fff",
        accentBackground: "#fafafa",
        borderColor: "#696969"
    }
})
const App = (props) => {
    return (
        <MuiThemeProvider theme={darkTheme}>
            <div className='App'>
                <AppBarBasic /><FooterBasic />
            </div>
        </MuiThemeProvider>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
