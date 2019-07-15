import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ComponentBar from "./componentBar";
import { ComponentsMap } from "./componentsMap";
import { connect } from "react-redux";
import PreviewLoader from "./previewLoader";
const mapStateToProps = state => ({
  componentsData: state.applicationManager.componentsData,
  previewStatus: state.applicationManager.previewStatus
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
  if(props.previewStatus === 'STARTED') return <PreviewLoader />
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
