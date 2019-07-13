import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ComponentBar from "./componentBar";
import { ComponentsMap } from "./componentsMap";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  componentsData: state.applicationManager.componentsData
});
const useStyle = makeStyles(theme => ({
  root: {
    padding: "1em"
  }
}));
function ComponentsContainer(props) {
  const classes = useStyle();
  const { componentsData } = props;
  if (!componentsData) return null;
  return (
    <div className={classes.root}>
      {Object.entries(componentsData).map(([component, data], index) => {
        return (
          <div>
            <ComponentBar name={component} />
            {ComponentsMap[component].component}
          </div>
        );
      })}
    </div>
  );
}
export default connect(mapStateToProps)(ComponentsContainer);
