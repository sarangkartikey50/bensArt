import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  text: {
    border: theme.border,
    padding: 10,
    borderRadius: 10,
    background: theme.background,
    color: theme.textColor
  },
  icon: {
    color: theme.textColor,
    cursor: 'pointer'
  },
  drag: {
    color: theme.textColor,
    cursor: 'grabbing'
  }
}));

export default function SideBarComponentsList(props) {
  const classes = useStyle();
  const { componentsList, setComponentsList } = props;
  const updateComponentsList = (removedComponent) => {
    const newComponentsList = componentsList.filter(component => {
      return !(component === removedComponent)
    })
    setComponentsList(newComponentsList)
  }
  return (
    <div>
      <div className={""}>
        <List dense={true}>
          {componentsList.map((component, index) => {
            return (
              <ListItem key={index}>
                <IconButton>
                  <DragIndicatorIcon className={classes.drag} />
                </IconButton>
                <ListItemText className={classes.text} primary={component} />
                <IconButton aria-label="Delete">
                  <RemoveCircleIcon className={classes.icon} onClick={() => updateComponentsList(component)} />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
