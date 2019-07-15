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
  const [age, setAge] = React.useState(options[0].value);
  const [open, setOpen] = React.useState(false);
  function handleChange(event) {
    setAge(event.target.value);
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
          value={age}
          onChange={handleChange}
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.selectIcon
            }
          }}
          menuProps={{
            classes: {
              root: classes.selectInput
            }
          }}
        >
          {options.map((option, key) => (<MenuItem value={option.value}>{option.key}</MenuItem>))}
        </Select>
      </FormControl>
  );
}
