import {FC, ReactElement} from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core/';
import './category-card.scss';


const CategoryCard: FC = (): ReactElement => (
    <Card className="category-card">
      <CardActionArea>
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

export default CategoryCard;
