import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    background: theme.surface,
    margin: '0 auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.primary,
    color: theme.background
  },
  text: {
      color: theme.textColor,
      fontFamily: 'GoogleSans'
  },
  subHeader: {
      color: theme.textColor,
      fontFamily: 'GoogleSans',
      opacity: '0.5',
      margin: 0
  },
  action: {
      color: theme.primary
  }
}));

export default function CardComplex() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.text}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings" className={classes.text}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={<p className={classes.subHeader}>September 14, 2016</p>}
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.dribbble.com/users/992274/screenshots/6242422/gadgets_in_the_life_kit8-net.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.text} variant="body2" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.action}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
