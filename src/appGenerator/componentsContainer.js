import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ComponentBar from "./componentBar";
import { ComponentsMap } from "./componentsMap";
import { connect } from "react-redux";
import PreviewLoader from "./previewLoader";
const mapStateToProps = state => ({
  selectedComponentsData: state.applicationManager.selectedComponentsData,
  previewStatus: state.applicationManager.previewStatus
});
const useStyle = makeStyles(theme => ({
  root: {
    padding: "1em"
  }
}));
function ComponentsContainer(props) {
  const classes = useStyle();
  const { selectedComponentsData } = props;
  if (!selectedComponentsData) return null;
  return (
    <div>
    { props.previewStatus === 'STARTED' ? <PreviewLoader /> : null }
    <div className={classes.root}>
      {selectedComponentsData.map((component, index) => {
        return (
          <div key={index}>
            <ComponentBar name={component.name} />
            {ComponentsMap[component.name]['component']}
          </div>
        );
      })}
    </div>
    </div>
  );
}
export default connect(mapStateToProps)(ComponentsContainer);
