
import React, { useEffect } from 'react'
import '../style/index.css'
import { updateComponentsData } from '../actions'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import AppBarBasic from '../components/AppBar/appBarBasic'
import QuoteBasic from '../components/Quotes/quoteBasic'
const SiteApp = (props) => {
    useEffect(() => {
        props.updateComponentsData([{"name":"AppBarBasic","data":{"headerText":"Logo","headerIcon":"","items":[{"name":"Lorem","url":"#"},{"name":"Dolor","url":"#"},{"name":"Conecstor","url":"#"},{"name":"Donec","url":"#"}]}},{"name":"QuoteBasic","data":{"quote":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed fringilla mi.","author":"Lorem Consectur"}}])
    })
    return (
        <MuiThemeProvider theme={createMuiTheme({"background":"#121212","surface":"#1d1d1d","textColor":"#fff","primary":"#bb86fc","secondary":"#fff","boxShadow":"auto","border":"1px solid #121212"})}>
            <div className='App' style={{background: '#121212'}}>
                <AppBarBasic componentIndex={0} /><QuoteBasic componentIndex={1} />
            </div>
        </MuiThemeProvider>
    )
}
export default connect(null, { updateComponentsData })(SiteApp)
