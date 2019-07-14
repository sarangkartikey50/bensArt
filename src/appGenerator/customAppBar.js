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
            <svg
              className={classes.logo}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="lightbulb"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
              />
            </svg>{" "}
            <span className={classes.titleText}>Redesign</span>
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
