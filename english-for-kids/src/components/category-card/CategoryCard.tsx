import { FC, ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import './category-card.scss';
import useActions from '../../hooks/useActions';

interface CategoryCardProps {
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
  title,
  imageSrc,
}): ReactElement => {
  const classes = useStyles();
  const { changeCategory } = useActions();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        onClick={() => {
          history.push('/cards');
          changeCategory(title);
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
