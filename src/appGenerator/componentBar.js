import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { MenuList, MenuItem } from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PaletteIcon from "@material-ui/icons/Palette";
import TuneIcon from "@material-ui/icons/Tune";
const useStyle = makeStyles(theme => ({
  root: {
      display: 'block',
      margin: '1em auto',
      width: '100%'
  },
  paper: {
    width: '100%',
    boxShadow: "none",
    background: "#fafafa",
    display: "inline-flex",
    alignItems: 'center'
  },
  sideBarMenu: {
    display: "inline-flex",
    float: "right",
    margin: "-10px 1em"
  },
  text: {
      flexGrow: 1,
      marginLeft: '1em'
  },
  listItem: {
      padding: '4px 8px'
  }
}));
export default function ComponentBar(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.text}>{props.name}</Typography>
        <MenuList className={classes.sideBarMenu}>
          <MenuItem className={classes.listItem}>
            <TuneIcon />
          </MenuItem>
          <MenuItem className={classes.listItem}>
            <PaletteIcon />
          </MenuItem>
          <MenuItem className={classes.listItem}>
            <PlaylistAddIcon />
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
