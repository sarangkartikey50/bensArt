import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.surface,
    color: theme.textColor,
    borderRadius: 0,
    padding: 20,
    boxShadow: theme.boxShadow,
    border: theme.border
  },
  listHeader: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Google Sans"
  },
  listItem: {
    fontSize: "12",
    fontWeight: "400",
    fontFamily: "Google Sans"
  },
  grid: {
    width: "100%",
    margin: "0",
    borderBottom: theme.border
  },
  footer: {
    fontSize: "14px",
    fontWeight: "bold"
  },
  inline: {
    display: "inline-flex"
  },
  by: {
    fontSize: "14px",
    fontWeight: "bold",
    color: theme.primary
  },
  branding: {
    fill: theme.secondary
  }
}));

const FooterBasic = props => {
  const classes = useStyles();
  return (
    <div classes={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.grid} container spacing={8}>
          <Grid item md={3}>
            <List component="nav" aria-label="Main mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography variant="h5" className={classes.listHeader}>
                    DESTINATIONS
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Ladakh
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Kargil
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Nubra Valley
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Zanskar
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Kashmir
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3}>
            <List component="nav" aria-label="Main mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography variant="h5" className={classes.listHeader}>
                    INTERESTS
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Adventure travel
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Road trips
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Bagpacking
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Family holidays
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Festivals
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3}>
            <List component="nav" aria-label="Main mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography variant="h5" className={classes.listHeader}>
                    COMMUNITY
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  About us
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Terms & conditions
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Privacy policy
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3}>
            <List component="nav" aria-label="Main mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography variant="h5" className={classes.listHeader}>
                    CONTACT US
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  +91 8080750398
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  ladakhmagnificent@gmail.com
                </Typography>
              </ListItem>
              <ListItem button>
                <Typography component="p" className={classes.listItem}>
                  Magnificent Ladakh Pvt. Ltd., Namgyal complex, 1st Floor| Main
                  market | Leh Ladakh| J& K 194101
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid style={{ padding: "20px" }} container>
          <Grid item md={6}>
            <div className={classes.inline}>
              <Typography className={classes.footer} variant="h6">
                MAGNIFICENT LADAKH
              </Typography>
              <Typography className={classes.footer} variant="h6">
                &nbsp;&nbsp;©&nbsp;&nbsp;
              </Typography>
              <Typography className={classes.footer} variant="h6">
                2019&nbsp;&nbsp;|&nbsp;&nbsp;
              </Typography>
              <Typography className={classes.footer} variant="h6">
                DESIGNED BY{" "}
                <Link href="#" className={classes.by}>
                  &nbsp;RSBAWA
                </Link>
              </Typography>
            </div>
          </Grid>
          <Grid item md={3} />
          <Grid item md={3}>
            <Grid container>
              <Grid item md={4}>
                <svg
                  height={40}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="svg-inline--fa fa-instagram fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    className={classes.branding}
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </Grid>
              <Grid item md={4}>
                <svg
                  height={40}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook"
                  className="svg-inline--fa fa-facebook fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    className={classes.branding}
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
              </Grid>
              <Grid item md={4}>
                <svg
                  height={40}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="svg-inline--fa fa-twitter fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    className={classes.branding}
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FooterBasic;
