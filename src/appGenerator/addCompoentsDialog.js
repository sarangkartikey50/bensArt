import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import React, { useState } from "react";
import { ComponentsMap } from './componentsMap';
import CustomSelect from "./customSelect";

const useStyle = makeStyles(theme => ({
  icon: {
    color: theme.textColor,
    cursor: "pointer"
  },
  iconButton: {
      padding: 0
  },
  title: {
      background: theme.surface,
      color: theme.textColor
  },
  body: {
      background: theme.surface,
      color: theme.textColor,
      width: 'initial'
  },
  actions: {
      background: theme.surface,
      color: theme.textColor,
      width: 'auto'
  },
}));

export default function AddComponentsDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { setComponentsList, componentsList } = props
  const options = [{key: 'Appbar Basic', value: 'AppBar'},{key: 'Landing', value: 'Landing'},{key: 'Quote', value: 'Quote'}]
  const [selectedComponent, setSelectedComponent] = useState(options[0].value)
  const classes = useStyle();
  const handleClickOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  const addComponent = (name) => {
    setComponentsList([...componentsList, name])
  }
  const listComponents = () => {
    return Object.entries(ComponentsMap).filter(([key, value], index) => {
      return value.category === selectedComponent
    })
    .map(([key, value], index) => {
      value.component.props.componentIndex = value.index
      return (
        <div key={index}>
          {value.component}
          <Button color='primary' onClick={() => addComponent(key)}>Add Component to your list</Button>
        </div>
      )
    })
  }
  return (
    <div>
      <IconButton className={classes.iconButton} onClick={handleClickOpen}>
        <AddSharpIcon className={classes.icon} />
      </IconButton>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" className={classes.title}>
            <span>Add Components</span>
            <CustomSelect name='Components' selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} options={options} />
        </DialogTitle>
        <DialogContent className={classes.body} dividers={true}>
            {listComponents()}
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
