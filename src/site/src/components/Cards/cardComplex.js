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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    background: theme.surface,
    margin: '1em auto',
    border: theme.border,
    boxShadow: theme.boxShadow
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
  title: {
    fontSize: '15px',
    fontFamily: 'GoogleSans',
    fontWeight: 500,
    margin: 0
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

export default function CardComplex(props) {
  const classes = useStyles();
  const { data } = props
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.text}
        avatar={
          data.cardHeader.avatar ? <Avatar aria-label="Recipe" className={classes.avatar}>
            S
          </Avatar> : null
        }
        action={
          <IconButton aria-label="Settings" className={classes.text}>
            <MoreVertIcon />
          </IconButton>
        }
        title={data.cardHeader.header ? <p className={classes.title}>{data.cardHeader.header}</p> : null}
        subheader={ data.cardHeader.subHeader ? <p className={classes.subHeader}>data.cardHeader.subHeader</p> : null }
      />
      { data.cardImage ? <CardMedia
        className={classes.media}
        image={data.cardImage}
        title={data.cardHeader.header}
      /> : null }
      <CardContent>
        <Typography className={classes.text} variant="body2" component="p">{data.cardBody.substring(0, 300)}...</Typography>
      </CardContent>
      <CardActions disableSpacing>
        { data.cardAction ? <Button as='a' href={data.cardAction.url} className={classes.action}>{ data.cardAction.name }</Button> : null }
      </CardActions>
    </Card>
  );
}
