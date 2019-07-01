const fs = require('fs')

let rawdata = fs.readFileSync('config.json');  
let config = JSON.parse(rawdata);  
const theme = config.theme
let componentsConfig = ''
let importsConfig = `import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"`
config.configurations.components.forEach(component => {
    importsConfig += `\nimport ${component.component} from '${component.import.path}'`
    componentsConfig += `<${component.component} />`
})
output = `
${importsConfig}
const App = (props) => {
    return (
        <MuiThemeProvider theme={createMuiTheme(${JSON.stringify(theme)})}>
            <div className='App' style={{background: '${theme.background}'}}>
                ${componentsConfig}
            </div>
        </MuiThemeProvider>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
`
fs.open('./src/index.js', 'w', (err, file) => {
    if(err) throw err
    console.log('newApp.js created!')
})
fs.writeFile('./src/index.js', output, (err) => {
    if(err) throw err
    console.log('newApp.js written succesfully!')
})