const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const exec = require("child_process").exec;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(express.static(path.join(__dirname, "build")));
app.post("/create-app", (req, res) => {
  try {
    configGenerator(req.body);
    exec("cd src/site/ && npm start", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
      }
      console.log(stdout);
      console.log(stderr);
      res.send({
        status: "success",
        stdout,
        stderr
      });
    });
  } catch (e) {
    console.log("There was some error creating configJson", e);
    res.send({
      status: "failure",
      error: e
    });
  }
});
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "build/" });
});
app.listen(5000);
console.log("server started @ http://localhost:5000");

const configGenerator = config => {
  const theme = config.theme;
  const data = config.data;
  let componentsConfig = "";
  let importsConfig = `import React, { useEffect } from 'react'
import '../style/index.css'
import { updateComponentsData } from '../actions'
import { connect } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"`;
  config.configurations.components.forEach((component, index) => {
    if(!importsConfig.includes(component.component))
      importsConfig += `\nimport ${component.component} from '${
      component.import.path
      }'`;
    componentsConfig += `<${component.component} componentIndex={${index}} />`;
  });
  const output = `
${importsConfig}
const SiteApp = (props) => {
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
export default connect(null, { updateComponentsData })(SiteApp)
`;
  fs.open("./src/site/src/containers/app.js", "w", (err, file) => {
    if (err) throw err;
    console.log("site created!");
  });
  fs.writeFile("./src/site/src/containers/app.js", output, err => {
    if (err) throw err;
    console.log("site written succesfully!");
  });
  fs.open("./config.json", "w", (err, file) => {
    if (err) throw err;
    console.log("config created!");
  });
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), err => {
    if (err) throw err;
    console.log("config written successfully!");
  });
  fs.writeFile(
    "./src/site/.env",
    `SKIP_PREFLIGHT_CHECK=true \nPORT=7000`,
    err => {
      if (err) throw err;
      console.log("env set successfully!");
    }
  );
};
