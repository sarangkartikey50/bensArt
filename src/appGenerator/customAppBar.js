import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    background: theme.surface
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: .1,
    fontWeight: "400",
    display: "flex",
    alignItems: "center"
  },
  appBar: {
    background: theme.background,
    color: theme.textColor,
    boxShadow: "none",
  },
  button: {
    textTransform: "capitalize",
    fontFamily: "GoogleSans"
  },
  titleText: {
    marginLeft: 10
  },
  logo: {
    height: 30,
    color: theme.textColor
  },
  search: {
    position: "relative",
    borderRadius: 0,
    backgroundColor: fade(theme.searchColor, 1),
    "&:hover": {
      backgroundColor: fade(theme.searchColor, 0.75)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  menu: {
    color: theme.textColor
  }
}));
function CustomAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            
<svg aria-hidden="true" className={classes.logo} focusable="false" data-prefix="fas" data-icon="meteor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M491.2.7C452.5 12.3 379.4 35 303.5 62c-2.1-7-4-13.5-5.6-18.6-3-9.7-13.9-14.2-22.9-9.5C232.6 56 122.2 116.5 60.6 176.4c-1.1 1-2.5 2-3.5 3C19 217.4 0 267.3 0 317.2 0 367 19 416.9 57 455c38 38 87.9 57.1 137.8 57 49.9 0 99.8-19 137.9-57.1 1-1 2-2.4 3-3.5 59.8-61.6 120.4-172.1 142.5-214.4 4.7-9 .2-19.9-9.5-22.9-5.2-1.6-11.6-3.5-18.6-5.6 27-76 49.7-149 61.3-187.7C515 8.4 503.6-3 491.2.7zM192 448c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128zm-32-192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm48 96c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"></path></svg>
            <span className={classes.titleText}>bensArt</span>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
            />
          </div>
          <div className={classes.root} />
          <Avatar
            src="https://cdn.dribbble.com/users/1324146/screenshots/5819188/2_2x.jpg"
            className={classes.avatar}
          />
          <IconButton>
            <MenuRoundedIcon className={classes.menu} />
          </IconButton>
          {/* {data.items.map((item, index) => {
            return <Button key={index} as='a' href={item.url} className={classes.button} color="inherit">{item.name}</Button>
          })} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default connect()(CustomAppBar);
