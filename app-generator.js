const fs = require('fs')

let rawdata = fs.readFileSync('config.json');  
let config = JSON.parse(rawdata);  
const theme = config.theme
const data = config.data
let componentsConfig = ''
let importsConfig = `import React, { useEffect } from 'react'
import '../style/index.css'
import { updateComponentsData } from '../actions'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"`
config.configurations.components.forEach(component => {
    importsConfig += `\nimport ${component.component} from '${component.import.path}'`
    componentsConfig += `<${component.component} />`
})
const output = `
${importsConfig}
const App = (props) => {
    useEffect(() => {
        props.updateComponentsData(${JSON.stringify(data)})
    })
    return (
        <MuiThemeProvider theme={createMuiTheme(${JSON.stringify(theme)})}>
            <div className='App' style={{background: '${theme.background}'}}>
                ${componentsConfig}
            </div>
        </MuiThemeProvider>
    )
}
export default connect(null, { updateComponentsData })(App)
`
fs.open('./src/containers/siteApp.js', 'w', (err, file) => {
    if(err) throw err
    console.log('site created!')
})
fs.writeFile('./src/containers/siteApp.js', output, (err) => {
    if(err) throw err
    console.log('site written succesfully!')
})