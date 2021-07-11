import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCksEA9fYA&usqp=CAcVCsaah8F6GyB25Qvvyp1VjtJ8W7M593UAYzuR6hUWEtj0TbZLG3q-zMFlfPfuyhttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbSlPuN83M7hOq--lNIfuI1cJZdVGFrlqrSN8rpfqF69P1cf7zTLTKzolfAvZ2vLylOMnI7k02aaVs&usqp=CAcp807JgPWhttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbSlPuN83M7hOq--lNIfuI1cJZdVGFrlqrSN8rpfqF69P1cf7zTLTKzolfAvZ2vLylOMnI7k02aaVs&usqp=CAc"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Golf Dress
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           $40 <del> $500 </del>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
