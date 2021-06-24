import { Grid } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import CategoryCard from '../category-card/CategoryCard';
import './category-card-container.scss';

const ChooseCategoryPage: FC = (): ReactElement => (
  <Grid className="category-card-container" container justify="center">
    <Grid item lg={10}>
      <Grid
        className="category-card-container__inner"
        justify="space-around"
        container
      >
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Grid>
    </Grid>
  </Grid>
);

export default ChooseCategoryPage;
