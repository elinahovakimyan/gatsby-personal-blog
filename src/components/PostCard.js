import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import { colors } from '../utils/colors';

const styles = {
  title: {
    color: colors.blue,
  },
  date: {
    color: colors.yellow,
  },
  excerpt: {
    color: colors.orange,
  },
};

const PostCard = ({ title, excerpt, url, category, classes }) => (
  <Card>
    <Link to={url}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography component="p" className={classes.category}>
            {category}
          </Typography>
          <Typography component="p" className={classes.excerpt}>
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
    <CardActions>
      {/* <Button size="small" color="">
        Share
      </Button> */}
      <Link to={url}>
        <Button size="small" color="">
          Read More
        </Button>
      </Link>
    </CardActions>
  </Card>
);

export default withStyles(styles)(PostCard);
