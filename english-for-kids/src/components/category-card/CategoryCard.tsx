import { FC, ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import './category-card.scss';
import useActions from '../../hooks/useActions';

const CategoryCard: FC = (): ReactElement => {
  const { changeCategory } = useActions();
  const history = useHistory();
  return (
    <Card className="category-card">
      <CardActionArea
        onClick={() => {
          history.push('/cards');
          changeCategory('animal');
        }}
      >
        <CardMedia
          className="category-card__media"
          image="./assets/images/categories/animals/rabbit.jpg"
          title="rabbit"
        />
        <Typography
          className="category-card__heading"
          align="center"
          color="textPrimary"
          variant="h5"
        >
          Animals
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
