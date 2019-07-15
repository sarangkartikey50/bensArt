import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
    float: 'right'
  },
  label: {
    color: theme.textColor
  },
  select: {
    color: theme.textColor,
    '&:before': {
        borderColor: theme.background,
    },
    '&:after': {
        borderColor: theme.background,
    }
  },
  selectIcon: {
    fill: theme.textColor
  },
  selectInput: {
    background: theme.background
  }
}));

export default function CustomSelect(props) {
  const classes = useStyles();
  const { name, options } = props
  const [open, setOpen] = React.useState(false);
  function handleChange(event) {
    props.setSelectedComponent(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select" className={classes.label}>{name}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.selectedComponent}
          onChange={handleChange}
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.selectIcon
            }
          }}
        >
          {options.map((option, index) => (<MenuItem key={index} value={option.value}>{option.key}</MenuItem>))}
        </Select>
      </FormControl>
  );
}
