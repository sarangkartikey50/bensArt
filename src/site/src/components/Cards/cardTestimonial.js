import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    background: theme.surface,
    margin: '0 auto',
    border: theme.border,
    boxShadow: theme.boxShadow
  },
  bigAvatar: {
    margin: "-70px auto 10px auto",
    width: 100,
    height: 100,
    border: "5px solid #fff"
  },
  text: {
      color: theme.textColor,
      fontFamily: 'GoogleSans'
  }
}))

export default function CardTestimonial(props) {
  const classes = useStyles();
  const { name, avatar, gradient } = props.data
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={gradient}
        />
        <CardContent>
          <Avatar
            alt={name}
            src={avatar}
            className={classes.bigAvatar}
          />
          <Typography className={classes.text} align="center" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            align="justify"
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.text}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porttitor, erat in iaculis maximus, magna justo varius ligula, in
            condimentum augue erat sit amet ex. Nam sed sem in est commodo
            vulputate at ac erat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
