import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { makeStyles } from "@material-ui/core/styles";
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
      width: 'fit-content'
  },
  actions: {
      background: theme.surface,
      color: theme.textColor,
      width: 'auto'
  }
}));

export default function AddComponentsDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const handleClickOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <IconButton className={classes.iconButton} onClick={handleClickOpen}>
        <AddSharpIcon className={classes.icon} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" className={classes.title}>
            <span>Add Components</span>
            <CustomSelect name='Component' options={[{key: 'Appbar Basic', value: 'AppBarBasic'},{key: 'Landing Basic', value: 'LandingBasic'},{key: 'Quote Basic', value: 'QuoteBasic'}]} />
        </DialogTitle>
        <DialogContent className={classes.body} dividers={true}>
          <DialogContentText className={classes.body}>
            Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </DialogContentText>
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
