import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppGeneratorContainer from "../appGenerator/appGeneratorContainer";
import "../style/index.css";
import { connect } from 'react-redux'
const mapStateToProps = (state) =>({
    isDarkTheme: state.applicationManager.isDarkTheme
})
const darkTheme = {
  background: "#121212",
  surface: "#1d1d1d",
  textColor: "#fff",
  primary: "#bb86fc",
  secondary: "#fff",
  boxShadow: "auto",
  searchColor: "#1d1d1d",
  componentBarBackground: "#121212",
  border: "1px solid #121212"
};
const lightTheme = {
  background: "#fff",
  surface: "#fff",
  textColor: "#333",
  primary: "#6400e0",
  searchColor: "#f6f6f6",
  secondary: "#333",
  boxShadow: "none",
  border: "1px solid #efefef",
  componentBarBackground: "#f6f6f6"
};

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MuiThemeProvider theme={props.isDarkTheme ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme)}>
            <div className="App" style={props.isDarkTheme ? { background: "#121212" } : { background: '#fff'}}>
              <AppGeneratorContainer />
            </div>
          </MuiThemeProvider>
        </Route>
      </Switch>
    </Router>
  );
};
export default connect(mapStateToProps)(App);
