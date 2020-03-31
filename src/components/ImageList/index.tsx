import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import tileData from './tileData';
import Upload from '../Upload';
import ImageDialog from './ImageDialog';
import { useDispatch } from 'react-redux';
import { openDialog } from './../../store/imageDialog/actions';

const useStyles = makeStyles({
  root: {
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    maxWidth: '45%',
    marginBottom: '20px',
  },
});

const ImageList: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      {tileData.map((tile: any) => (
        <Card key={Math.random()} className={classes.card}>
          <CardActionArea onClick={() => dispatch(openDialog(true))}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={tile.img}
            />
          </CardActionArea>
        </Card>
      ))}
      <ImageDialog />
      <Upload />
    </div>
  );
};

export default ImageList;
