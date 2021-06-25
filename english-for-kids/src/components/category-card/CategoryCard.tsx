import { FC, ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import useActions from '../../hooks/useActions';

interface CategoryCardProps {
  id: number;
  title: string;
  imageSrc: string;
}

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 200
  },
  heading: {
    padding: '15px 0'
  },
  media: {
    height: 140
  },
  actionArea: {
    height: '100%'
  }
});

const CategoryCard: FC<CategoryCardProps> = ({
  id,
  title,
  imageSrc,
}): ReactElement => {
  const classes = useStyles();
  const { changeCategory} = useActions();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        onClick={() => {
          changeCategory(id);
          history.push('/cards');
        }}
      >
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title={title}
        />
        <Typography
          className={classes.heading}
          align="center"
          color="textPrimary"
          variant="h5"
        >
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
