import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import facebookIcon from "../../resources/icons/facebookIcon.svg";
import twitterIcon from "../../resources/icons/twitterIcon.svg";
import instagramIcon from "../../resources/icons/instagramIcon.svg";

const useStyles = makeStyles(theme => ({
  paper: {
    background: theme.surface,
    color: theme.textColor,
    borderRadius: 0,
    padding: 20,
    boxShadow: "none"
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
    borderBottom: "1px solid " + theme.background
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
        <Grid style={{ padding: "20px" }} container spacing={16}>
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
            <Grid container spacing={24}>
              <Grid item md={4}>
                <img height="40" alt="instagram" src={instagramIcon} />
              </Grid>
              <Grid item md={4}>
                <img height="40" alt="facebook" src={facebookIcon} />
              </Grid>
              <Grid item md={4}>
                <img height="40" alt="twitter" src={twitterIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FooterBasic;
